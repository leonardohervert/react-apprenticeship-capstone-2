import getData from "../../utils/commons/getData";
import { format } from "date-fns";
import fetchMock from "jest-fetch-mock";
describe("Fetch API", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("Call an API and return data", async () => {
    const date = format(new Date(), "yyyy-MM-dd");

    await getData(
      `https://api.nasa.gov/planetary/apod?api_key=d1wuMh2uafdjSA32WF5U0L035aD07eEfmjewchN5&date=${date}`
    ).then((res) => {
      console.log(res);
      return expect(res).toEqual({
        copyright: "Matipon TangmatithamNARIT Text: Matipon Tangmatitham",
        date: "2022-01-25",
        explanation:
          "Which direction is this comet heading?  Judging by the tail, one might imagine that Comet Leonard is traveling towards the bottom right, but a full 3D analysis shows it traveling almost directly away from the camera.  With this perspective, the dust tail is trailed towards the camera and can only be seen as a short yellow-white glow near the head of the comet.  The bluish ion tail, however, is made up of escaping ions that are forced directly away from the Sun by the solar wind -- but channeled along the Sun's magnetic field lines.  The Sun's magnetic field is quite complex, however, and occasionally solar magnetic reconnection will break the ion tail into knots that are pushed away from the Sun. One such knot is visible in the featured one-hour time-lapse video captured in late December from Thailand.  Comet Leonard is now fading as it heads out of our Solar System.    Gallery:  Notable images submitted to APOD of Comet Leonard in 2021",
        media_type: "video",
        service_version: "v1",
        title: "Video: Comet Leonard over One Hour",
        url: "https://www.youtube.com/embed/s6IpsM_HNcU?rel=0",
      });
    });
  });
});