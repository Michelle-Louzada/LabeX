export const goToHomePage = (history) => {
    history.push("/");
  };
  export const goToTripPage = (history) => {
    history.push("/viagens");
  };
  export const goToLoginPage = (history) => {
    history.push("/login");
  };
  export const goToFormPage = (history, id) => {
    history.push(`/viagens/formulario/${id}`);
  };
  export const goToCreatePage = (history) => {
    history.push(`/criarViagem`);
  };
  export const goToDetailPage = (history, id) => {
    history.push(`/viagens/detalhes/${id}`);
  };
  export const goToSignUpPage = (history) => {
    history.push(`/login/signup`);
  };
  export const deletToken = (history) => {
    localStorage.removeItem("token");
    history.push(`/login`)
}