import ActiveModelAdapter from 'active-model-adapter';
import ENV from '../config/environment';

export default ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: ENV.API_URL,
});
