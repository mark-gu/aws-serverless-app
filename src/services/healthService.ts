import moment from 'moment';

class HealthService {
  public ping(): Promise<{ status: string; timestamp: string }> {
    return Promise.resolve({
      status: 'OK',
      timestamp: moment().format(),
    });
  }
}

export default HealthService;
