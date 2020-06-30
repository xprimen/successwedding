import firebases from '../../../config/firebase'
import { Logout, StoreUserdata } from '../../../components/Auth'

export const processLogin = username => dispatch => {
  return new Promise((resolve, reject) => {
    // dispatch({type:'CHANGE_LOADING',value:true})
    // dispatch({type:'CHANGE_NAME',value:''})
    // dispatch({type:'CHANGE_ERROR',value:''})
    //console.log(firebases.database())
    //return (
    firebases
      .database()
      .ref('/users')
      .once('value', data => {
        let statusLogin = {
          status: false,
          name: '',
          message: 'Username Tidak Terdaftar',
          loading: true,
        }

        data.val().map((val, i) => {
          //listUsername.push(val.username)
          //console.log(val)
          if (username === val.username) {
            statusLogin = {
              status: true,
              name: val.name,
              message: 'Success',
              loading: false,
            }
            //name = val.name;
          }
        })

        //console.log(statusLogin)

        // dispatch({type:'CHANGE_LOADING',value:false})

        if (statusLogin.status) {
          // dispatch({type:'CHANGE_LOGIN',value:true})
          // dispatch({type:'CHANGE_MESSAGE',value:statusLogin.message})
          // dispatch({type:'CHANGE_NAME',value:statusLogin.name})
          StoreUserdata({
            name: statusLogin.name,
            isLogin: statusLogin.status,
            loading: statusLogin.loading,
          })
          resolve(true)
        } else {
          // dispatch({type:'CHANGE_LOGIN',value:false})
          // dispatch({type:'CHANGE_MESSAGE',value:statusLogin.message})
          // dispatch({type:'CHANGE_NAME',value:statusLogin.name})
          reject(false)
        }
      })
    //)
  })
}

export const processLogout = () => dispatch => {
  // dispatch({type:'CHANGE_LOGIN',value:false})
  // dispatch({type:'CHANGE_ERROR',value:''})
  // dispatch({type:'CHANGE_NAME',value:''})
  // dispatch({type:'CHANGE_LOADING',value:false})
  // dispatch({type:'CHANGE_MESSAGE',value:''})
  Logout()
}
