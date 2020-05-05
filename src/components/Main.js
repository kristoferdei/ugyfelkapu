import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";

class Main extends  React.Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Üdvözöljük honlapunkon!</h1>
                    <p>
                        Intézze ügyeit egyszerűen! <br/>
                        Új időpont felvételéhez válassza a Foglalás menüpontot! <br/>
                        Korábbi foglalásait megtalálja az Időpontok menüpont alatt. <br/>
                        A különböző ügyek időbe telnek és bizonyos dokumentumokat igényelnek.
                        Erről az Információ menüponton tájékozódhat! <br/>
                        Alkalmazottainkról a Munkatársak menüpont alatt talál bővebb inforációkat. <br/>
                        Köszönjük, hogy minket választott!
                    </p>
                </Jumbotron>
            </div>

        );
    }
}

export default Main;