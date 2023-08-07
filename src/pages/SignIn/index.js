import React from "react";
import ReactDOM from "react-dom";
import * as Components from "../../components/SignIn";
import "./style.scss";

// const nameRegis = document.getElementById("name");
// const emailRegis = document.getElementById("emailRegis");
// const passRegis = document.getElementById("passRegis");
// const confirmPass = document.getElementById("confirmPass");
// const form = document.querySelector("form");

// function checkform() {
//   let email = document.getElementById("email");
//   let pass = document.getElementById("pass");
//   if (email.value != "") {
//     if (email.value.length < 8) {
//       alert("Hãy nhập email trên 3 kí tự");
//       email.focus();
//     }
//   } else {
//     alert("Hãy nhập thông tin đăng nhập của ban");
//     email.focus();
//   }
//   if (pass.value != "") {
//     if (pass.value.length < 8) {
//       alert("Hãy nhập mật khẩu trên 8 kí tự");
//       pass.focus();
//     }
//   } else {
//     alert("Hãy nhập thông tin mật khẩu của ban");
//     pass.focus();
//   }
// }

// function showErrorRegis(input, message) {
//   let parentEle = input.parentElement;
//   let small = parentEle.querySelector("small");
//   parentEle.classList.add("error");
//   small.style.color = "#FF493C";
//   small.innerText = message;
// }

// function showSuccessRegis(input) {
//   let parentEle = input.parentElement;
//   let small = parentEle.querySelector("small");
//   parentEle.classList.remove("error");
//   small.innerText = "";
// }

// function emptyVali(listInput) {
//   let isEmptyErr = false;
//   listInput.forEach((input) => {
//     input.value = input.value.trim();
//     if (!input.value) {
//       isEmptyErr = true;
//       showErrorRegis(input, "không được để trống");
//     } else {
//       showSuccessRegis(input);
//     }
//   });
//   return isEmptyErr;
// }

// function checkEmailErr(input) {
//   const regrexEmail =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   input.value = input.value.trim();
//   let isEmalErr = regrexEmail.test(input.value);
//   if (isEmalErr) {
//     showSuccessRegis(input);
//   } else {
//     showErrorRegis(input, "Email không hợp lệ");
//   }
//   return isEmalErr;
// }

// function checkLengthErr(input, max, min) {
//   input.value = input.value.trim();
//   if (input.value.length < min) {
//     showErrorRegis(input, `Phải có ít nhất ${min} ký tự`);
//     return true;
//   }
//   if (input.value.length > max) {
//     showErrorRegis(input, `Không được quá ${max} ký tự`);
//     return true;
//   }

//   showSuccessRegis(input);
//   return false;
// }

// function checkMatchPass(input, repeatInput) {
//   if (input.value !== repeatInput.value) {
//     showErrorRegis(repeatInput, "mật khẩu không trùng khớp");
//     return true;
//   }
//   return false;
// }

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let isemptyErr = emptyVali([nameRegis, emailRegis, passRegis, confirmPass]);
//   let isEmailErr = checkEmailErr(emailRegis);
//   let isLengthName = checkLengthErr(nameRegis, 3, 20);
//   let isLengthPass = checkLengthErr(passRegis, 8, 20);
//   let isMatchPass = checkMatchPass(passRegis, confirmPass);
// });

const SignIn = () => {
  const [signIn, toggle] = React.useState(true);
  return (
    <div className="signIn">
      <Components.Container>
        <Components.SignUpContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type="text" placeholder="Name" />
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer signingIn={signIn}>
          <Components.Overlay signingIn={signIn}>
            <Components.LeftOverlayPanel signingIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signingIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
};

export default SignIn;
