module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '12f62d00996cdd744dc432890145f1e1'),
  },
});
