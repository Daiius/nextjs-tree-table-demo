import React from 'react';

import Panel from '../base/Panel';
import Input from '../base/Input';
import Button from '../base/Button';

export type LoginPanelProps = {
  username: string;
  setUsername: (newUsername: string) => void;
  password: string;
  setPassword: (newPassword: string) => void;
  autoComplete?: boolean;
};

const LoginPanel: React.FC<LoginPanelProps> = ({
  username,
  setUsername,
  password,
  setPassword,
  autoComplete = true,
}) => {
  return (
    <Panel className='flex flex-col'>
      <label
        htmlFor='login-username-input'
      >
        ユーザ名：
      </label>
      <Input
        id='login-uesrname-input'
        className='mb-4'
        type='text'
        placeholder='ユーザ名'
        value={username}
        onChange={e => setUsername(e.target.value)}
        autoComplete={autoComplete ? 'on' : 'off'}
      />
      <label
        htmlFor='login-password-input'
      >
        パスワード：
      </label>
      <Input
        id='login-password-input'
        className='mb-8'
        type='password'
        placeholder='パスワード'
        value={password}
        onChange={e => setPassword(e.target.value)}
        autoComplete={autoComplete ? 'on' : 'off'}
      />

      <Button className='self-end'>
        ログイン
      </Button>
    </Panel>
  );
};

export default LoginPanel;
