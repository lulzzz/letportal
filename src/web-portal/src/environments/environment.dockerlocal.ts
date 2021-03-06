export const environment = {
  production: false,
  version: '0.8.0',
  configurationEndpoint: 'http://192.168.20.8:5142/v1.0/api/configurations/Portal/v1.0',
  ignoreSendTokenEndpoints: 'api/accounts/login;api/accounts/refresh;api/accounts/forgot-password;api/accounts/recovery-password',
  chatOptions: {
    allowFileTypes: 'jpg;jpeg;gif;png;zip;rar;doc;docx;xls;xlsx;pdf',
    maxFileSizeInMb: 16
  },
  localization:{
    defaultLanguage: 'en-Us',
    allowSwitchLanguage: true,
    allowedLanguages: [
      { name: 'English', value: 'en-Us' },
      { name: 'Tiếng Việt', value: 'vi-VN' }
    ]
  }
};
