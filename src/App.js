import { useState } from 'react';
import { nameFormatting } from './functions';
import { outputFunction } from './functions';

const InputCountry = ({ handleChange, state }) => {
  return (
    <>
      {/* <label for="country">Choose a region:</label> */}
      <div id="countryInput">
        <input
          name="country"
          list="countrySelect"
          placeholder="Start typing..."
          id="country"
          type="text"
          value={state['country']}
          onChange={(e) => handleChange(e)}
        />
        <datalist id="countrySelect">
          <option value="United States of America"></option>
          <option value="Afghanistan"></option>
          <option value="Albania"></option>
          <option value="Algeria"></option>
          <option value="American Samoa"></option>
          <option value="Andorra"></option>
          <option value="Angola"></option>
          <option value="Anguilla"></option>
          <option value="Antarctica"></option>
          <option value="Antigua and Barbuda"></option>
          <option value="Argentina"></option>
          <option value="Armenia"></option>
          <option value="Aruba"></option>
          <option value="Australia"></option>
          <option value="Austria"></option>
          <option value="Azerbaijan"></option>
          <option value="Bahamas"></option>
          <option value="Bahrain"></option>
          <option value="Bangladesh"></option>
          <option value="Barbados"></option>
          <option value="Belarus"></option>
          <option value="Belgium"></option>
          <option value="Belize"></option>
          <option value="Benin"></option>
          <option value="Bermuda"></option>
          <option value="Bhutan"></option>
          <option value="Bolivia"></option>
          <option value="Bosnia and Herzegovina"></option>
          <option value="Botswana"></option>
          <option value="Bouvet Island"></option>
          <option value="Brazil"></option>
          <option value="British Indian Ocean Territory"></option>
          <option value="British Virgin Islands"></option>
          <option value="Brunei Darussalam"></option>
          <option value="Bulgaria"></option>
          <option value="Burkina Faso"></option>
          <option value="Burundi"></option>
          <option value="Cambodia"></option>
          <option value="Cameroon"></option>
          <option value="Canada"></option>
          <option value="Cape Verde"></option>
          <option value="Cayman Islands"></option>
          <option value="Central African Republic"></option>
          <option value="Chad"></option>
          <option value="Chile"></option>
          <option value="China"></option>
          <option value="Christmas Island"></option>
          <option value="Cocos Islands"></option>
          <option value="Colombia"></option>
          <option value="Comoros"></option>
          <option value="Congo"></option>
          <option value="DR Congo"></option>
          <option value="Cook Islands"></option>
          <option value="Costa Rica"></option>
          <option value="Croatia"></option>
          <option value="Cuba"></option>
          <option value="Cyprus"></option>
          <option value="Czech Republic"></option>
          <option value="Denmark"></option>
          <option value="Djibouti"></option>
          <option value="Dominica"></option>
          <option value="Dominican Republic"></option>
          <option value="Ecuador"></option>
          <option value="Egypt"></option>
          <option value="El Salvador"></option>
          <option value="Equatorial Guinea"></option>
          <option value="Eritrea"></option>
          <option value="Estonia"></option>
          <option value="Ethiopia"></option>
          <option value="Falkland Islands"></option>
          <option value="Faroe Islands"></option>
          <option value="Fiji"></option>
          <option value="Finland"></option>
          <option value="France"></option>
          <option value="French Guiana"></option>
          <option value="French Polynesia"></option>
          <option value="Gabon"></option>
          <option value="Gambia"></option>
          <option value="Georgia"></option>
          <option value="Germany"></option>
          <option value="Ghana"></option>
          <option value="Gibraltar"></option>
          <option value="Greece"></option>
          <option value="Greenland"></option>
          <option value="Grenada"></option>
          <option value="Guadeloupe"></option>
          <option value="Guam"></option>
          <option value="Guatemala"></option>
          <option value="Guernsey"></option>
          <option value="Guinea"></option>
          <option value="Guinea-Bissau"></option>
          <option value="Guyana"></option>
          <option value="Haiti"></option>
          <option value="Vatican City"></option>
          <option value="Honduras"></option>
          <option value="Hong Kong"></option>
          <option value="Hungary"></option>
          <option value="Iceland"></option>
          <option value="India"></option>
          <option value="Indonesia"></option>
          <option value="Iran"></option>
          <option value="Iraq"></option>
          <option value="Ireland"></option>
          <option value="Isle of Man"></option>
          <option value="Israel"></option>
          <option value="Italy"></option>
          <option value="Jamaica"></option>
          <option value="Japan"></option>
          <option value="Jersey"></option>
          <option value="Jordan"></option>
          <option value="Kazakhstan"></option>
          <option value="Kenya"></option>
          <option value="Kiribati"></option>
          <option value="North Korea"></option>
          <option value="South Korea"></option>
          <option value="Kuwait"></option>
          <option value="Kyrgyzstan"></option>
          <option value="Laos"></option>
          <option value="Latvia"></option>
          <option value="Lebanon"></option>
          <option value="Lesotho"></option>
          <option value="Liberia"></option>
          <option value="Libya"></option>
          <option value="Liechtenstein"></option>
          <option value="Lithuania"></option>
          <option value="Luxembourg"></option>
          <option value="Macao"></option>
          <option value="North Macedonia"></option>
          <option value="Madagascar"></option>
          <option value="Malawi"></option>
          <option value="Malaysia"></option>
          <option value="Maldives"></option>
          <option value="Mali"></option>
          <option value="Malta"></option>
          <option value="Marshall Islands"></option>
          <option value="Martinique"></option>
          <option value="Mauritania"></option>
          <option value="Mauritius"></option>
          <option value="Mayotte"></option>
          <option value="Mexico"></option>
          <option value="Micronesia"></option>
          <option value="Moldova"></option>
          <option value="Monaco"></option>
          <option value="Mongolia"></option>
          <option value="Montenegro"></option>
          <option value="Montserrat"></option>
          <option value="Morocco"></option>
          <option value="Mozambique"></option>
          <option value="Myanmar"></option>
          <option value="Namibia"></option>
          <option value="Nauru"></option>
          <option value="Nepal"></option>
          <option value="Netherlands"></option>
          <option value="New Caledonia"></option>
          <option value="New Zealand"></option>
          <option value="Nicaragua"></option>
          <option value="Niger"></option>
          <option value="Nigeria"></option>
          <option value="Niue"></option>
          <option value="Norfolk Island"></option>
          <option value="Northern Mariana Islands"></option>
          <option value="Norway"></option>
          <option value="Oman"></option>
          <option value="Pakistan"></option>
          <option value="Palau"></option>
          <option value="Palestine"></option>
          <option value="Panama"></option>
          <option value="Papua New Guinea"></option>
          <option value="Paraguay"></option>
          <option value="Peru"></option>
          <option value="Philippines"></option>
          <option value="Pitcairn"></option>
          <option value="Poland"></option>
          <option value="Portugal"></option>
          <option value="Puerto Rico"></option>
          <option value="Qatar"></option>
          <option value="Reunion"></option>
          <option value="Romania"></option>
          <option value="Russia"></option>
          <option value="Rwanda"></option>
          <option value="Saint Barthelemy"></option>
          <option value="Saint Helena"></option>
          <option value="Saint Kitts and Nevis"></option>
          <option value="Saint Lucia"></option>
          <option value="Saint Martin"></option>
          <option value="Saint Pierre and Miquelon"></option>
          <option value="Saint Vincent and the Grenadines"></option>
          <option value="Samoa"></option>
          <option value="San Marino"></option>
          <option value="Sao Tome and Principe"></option>
          <option value="Saudi Arabia"></option>
          <option value="Senegal"></option>
          <option value="Serbia"></option>
          <option value="Seychelles"></option>
          <option value="Sierra Leone"></option>
          <option value="Singapore"></option>
          <option value="Slovakia"></option>
          <option value="Slovenia"></option>
          <option value="Solomon Islands"></option>
          <option value="Somalia"></option>
          <option value="South Africa"></option>
          <option value="Spain"></option>
          <option value="Sri Lanka"></option>
          <option value="Sudan"></option>
          <option value="Suriname"></option>
          <option value="Svalbard and Jan Mayen"></option>
          <option value="Swaziland"></option>
          <option value="Sweden"></option>
          <option value="Switzerland"></option>
          <option value="Syria"></option>
          <option value="Taiwan"></option>
          <option value="Tajikistan"></option>
          <option value="Tanzania"></option>
          <option value="Thailand"></option>
          <option value="Timor-Leste"></option>
          <option value="Togo"></option>
          <option value="Tokelau"></option>
          <option value="Tonga"></option>
          <option value="Trinidad and Tobago"></option>
          <option value="Tunisia"></option>
          <option value="Turkey"></option>
          <option value="Turkmenistan"></option>
          <option value="Turks and Caicos Islands"></option>
          <option value="Tuvalu"></option>
          <option value="Uganda"></option>
          <option value="Ukraine"></option>
          <option value="United Arab Emirates"></option>
          <option value="United Kingdom"></option>
          <option value="United States Virgin Islands"></option>
          <option value="Uruguay"></option>
          <option value="Uzbekistan"></option>
          <option value="Vanuatu"></option>
          <option value="Venezuela"></option>
          <option value="Vietnam"></option>
          <option value="Wallis and Futuna"></option>
          <option value="Western Sahara"></option>
          <option value="Yemen"></option>
          <option value="Zambia"></option>
          <option value="Zimbabwe"></option>
        </datalist>
      </div>
    </>
  );
};

const InputName = ({
  setFormState,
  outputFunction,
  handleChange,
  state,
}) => {
  // const [nameState, setNameState] = useState('Noah');
  return (
    <>
      <div id="userInputContainer">
        <div id="userInput">
          <label for="country">Choose a region:</label>
          <input
            id="name"
            type="text"
            value={state['name']}
            onChange={(e) => handleChange(e)}
          />
          <InputCountry handleChange={handleChange} state={state} />
          <SearchBtn
            setFormState={setFormState}
            outputFunction={outputFunction}
            state={state}
          />
        </div>
      </div>
    </>
  );
};

const Output = ({ state }) => {
  const renderLabels = () => {
    return Object.entries(state).map((thing) => (
      <>
        <label>{nameFormatting(thing[0])}</label>

        <h1>{thing[1]}</h1>
      </>
    ));
  };
  return <>{renderLabels()}</>;
};

const SearchBtn = ({ setFormState, outputFunction, state }) => {
  return (
    <input
      type="button"
      value="Search Name"
      onClick={() => outputFunction(setFormState, state)}
    ></input>
  );
};

const HomePage = () => {
  const [formState, setFormState] = useState({
    name: '',
    country: '',
    age: '',
    origin: '',
    gender: '',
  });
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <>
      <InputName handleChange={handleChange} state={formState} />
      <div id="returnNameInfoContainer">
        <div id="spacer"></div>
        <Output state={formState} />
        <div id="spacer"></div>
      </div>
    </>
  );
};

function App() {
  return (
    <html>
      <head>
        <title>Name Statistics</title>
      </head>
      <body>
        <div id="header">
          <h1>Name Statistics</h1>
        </div>
        <div id="mainBody">
          <HomePage />
        </div>
      </body>
      <script src="javascript/apiCall.js"></script>
      <script src="javascript/functions.js"></script>
      <script src="javascript/script.js"></script>
    </html>
  );
}

export default App;
