const FormContainer = () => {
  const addUserHandler = () => {
    console.log("hellooo");
  };
  return (
    <form>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" />
      <label for="age">Last name:</label>
      <input type="number" id="lname" name="lname" />
      <button onSubmit={addUserHandler}></button>
    </form>
  );
};

export default FormContainer;
