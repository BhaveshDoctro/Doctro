import configs from '../../app.json';
type ENVType = 'local' | 'staging' | 'production';
const env = configs.env.name as ENVType;
export const APP_API_URL = configs.env[env].apiURL || '';
export const APP_LANGUAGE = configs.env[env].language || 'hi';
