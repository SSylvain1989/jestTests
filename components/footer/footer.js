export default function Footer() {

  return (
    <>
      <div id="maDiv" className="myDiv">
        toto
        <p>je suis le footer</p>
        <p>test footer</p>
        <br />
        <br />

        <div id="wrapperForm" className="wrapperFormClass">
        <br />
        <form
        className="formClass"
        name="email"
        id="idForm"
        >

        <input 
        name="emailInput"
        id="idInput"
        type="text" 
        placeholder="test input"
        />
        <button>Valide form</button>

        </form>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}