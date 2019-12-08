
export const increment = (nr) => {
    return { type : 'INCREMENT',
              payload : nr  };
  }
  
  export const decrement = () => {
      return { type : 'DECREMENT'}
    }
  
    export const login = () => {
      return { type : 'LOGIN'};
    }
  
    export const isLogin = () => {
      return { type : 'IS_LOGIN'};
    }

