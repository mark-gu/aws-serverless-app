import moment from "moment";
import _ from "lodash";

class HealthService {
  public ping(): { message: string, timestamp: string} {
    return {
      message: "OK",
      timestamp: moment().format()
    };
  }
}

export default HealthService;
