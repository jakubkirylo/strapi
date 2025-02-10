// config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "azure-storage",
      providerOptions: {
        account: env("STORAGE_ACCOUNT"),
        accountKey: env("STORAGE_ACCOUNT_KEY"),
        serviceBaseURL: env("STORAGE_URL"),
        containerName: env("STORAGE_ACCOUNT_CONTAINER"),
        defaultPath: "uploads",
        cdnBaseURL: env("CDN_BASE_URL"),
      },
    },
  },
});
