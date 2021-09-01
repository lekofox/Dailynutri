export const knexfile = {
  development: {
    client: "pg",
    connection: {
      host: "ec2-107-20-24-247.compute-1.amazonaws.com",
      user: "ysvoequrwtijgf",
      ssl: { rejectUnauthorized: false },

      password:
        "4c752e4315dd790f340155e1524fd60aa90c83f45d67047679d69207bcf5ec1d",
      database: "dflrll38bui19c",
    },
  },
};
