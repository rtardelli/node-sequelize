module.exports = {
  dialect: "postgres",
  host: "localhost",
  port: 15432,
  username: "app-user",
  password: "app-pass",
  database: "sqlnode",
  define: {
    timestamps: true,  // created_at, updated_at
    underscored: true
  },
};