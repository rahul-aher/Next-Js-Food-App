// const {username, password} = process.env

// export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.45hhdpa.mongodb.net/restoDB?appName=Cluster0"; 

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

export const connectionStr =
  `mongodb+srv://${username}:${password}@cluster0.45hhdpa.mongodb.net/restoDB?appName=Cluster0`;

