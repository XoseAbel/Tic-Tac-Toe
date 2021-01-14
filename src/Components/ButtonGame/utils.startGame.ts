import { connectWithApi } from '../../api/connectWithApi';
import { POST } from '../../api/const';

export const makeid = () => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const flipCoin = () => {
  return Math.round(Math.random());
};

export const handleCPUFirstMove = async (data: any) => {
  const result = await connectWithApi(POST, data);
  return result.boardState;
};
