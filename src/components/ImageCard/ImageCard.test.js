import getData from "../../utils/commons/getData";
import { format } from "date-fns";
import fetchMock from "jest-fetch-mock";
import { render } from "@testing-library/react";
import ImageCard from "./ImageCard.component";

let mockData = {
  media_type: "video",
  url: "https://www.youtube.com/embed/s6IpsM_HNcU?rel=0",
};

const mockConfig = {
  data: mockData,
  error: null,
  DoSearch: jest.fn(),
};

jest.mock("../../utils/hooks/useSearch", () => ({
  useSearch: () => mockConfig,
}));

test("should show image on first load", () => {
  const { getByTestId } = render(<ImageCard />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const nasaImage = getByTestId("nasa-image");
  expect(nasaImage).toHaveAttribute(
    "src",
    "https://www.youtube.com/embed/s6IpsM_HNcU?rel=0"
  );
});

describe("Fetch API", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  test("Call an API and return data", async () => {
    const date = format(new Date(), "yyyy-MM-dd");
    const expectedData = {
      copyright: "Matipon TangmatithamNARIT Text: Matipon Tangmatitham",
      date: `${date}`,
      explanation:
        "Which direction is this comet heading?  Judging by the tail, one might imagine that Comet Leonard is traveling towards the bottom right, but a full 3D analysis shows it traveling almost directly away from the camera.  With this perspective, the dust tail is trailed towards the camera and can only be seen as a short yellow-white glow near the head of the comet.  The bluish ion tail, however, is made up of escaping ions that are forced directly away from the Sun by the solar wind -- but channeled along the Sun's magnetic field lines.  The Sun's magnetic field is quite complex, however, and occasionally solar magnetic reconnection will break the ion tail into knots that are pushed away from the Sun. One such knot is visible in the featured one-hour time-lapse video captured in late December from Thailand.  Comet Leonard is now fading as it heads out of our Solar System.    Gallery:  Notable images submitted to APOD of Comet Leonard in 2021",
      media_type: "video",
      service_version: "v1",
      title: "Video: Comet Leonard over One Hour",
      url: "https://www.youtube.com/embed/s6IpsM_HNcU?rel=0",
    };
    await getData(
      `https://api.nasa.gov/planetary/apod?api_key=d1wuMh2uafdjSA32WF5U0L035aD07eEfmjewchN5&date=${date}`
    ).then((res) => {
      let expectedKeys = Object.keys(expectedData);
      return expect(Object.keys(res)).toEqual(expectedKeys);
    });
  });
});
