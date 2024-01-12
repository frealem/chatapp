import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

const hubUrl = 'http://localhost:5120/chatHub';

let connection = null;

const startConnection = () => {
  connection = new HubConnectionBuilder()
    .withUrl(hubUrl)
    .configureLogging(LogLevel.Information)
    .build();

  connection.start()
    .then(() => console.log('SignalR connection started'))
    .catch((err) => console.error('Error starting SignalR connection:', err));
}

const startConnectionWithToken = (token) => {
  connection = new HubConnectionBuilder()
           .withUrl(`${hubUrl}?access_token=${token}`)
           .configureLogging(LogLevel.Information)
           .build();
           
           connection.start()
           .then(() => console.log('SignalR connection started with token'))
           .catch((err) => console.error('Error starting SignalR connection:', err));        
}

const stopConnection = () => {
  connection.stop()
    .then(() => console.log('SignalR connection stopped'))
    .catch((err) => console.error('Error stopping SignalR connection:', err));
}

//signUp
export const createAccount = async (userName,email, password) => {
    if (connection === null) {
      startConnection();
    }
  
    try {
      await connection.invoke('SignUp', userName,email, password);
    } catch (err) {
      console.error('Error creating account:', err);
      throw err;
    }
  }

// signIn

export const signIn = async (email, password) => {
  if (connection === null) {
    startConnection();
  }

  try {
    startConnection();
    const data = await connection.invoke('/SignIn', email, password);
    if(data === null) return null;
    const {id, token} = data;
    startConnectionWithToken(token);
    return id;
  } catch (err) {
    console.error('Error authenticating:', err);
    throw err;
  }
}
