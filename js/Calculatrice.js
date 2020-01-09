/******************************************************************************\
* Auteur: JJK                                                                  *
* Date: 09/01/2020                                                             *
* Description: Calculatrice JavaScript.                                        *
* Version: 0.0a ← C'est-à-àdire bon pour la prod.                              *
\******************************************************************************/

class Calculatrice {
    // Constructeur
    constructor(resultat) {
        this.resultat = resultat;
        this.operande = "0";
        this.operation = '+';
    }

    // OPERATIONS
    add(operande) {
        this.resultat = this.resultat + operande;
        return this.resultat;
    }

    sub(operande) {
        this.resultat = this.resultat - operande;
        return this.resultat;
    }

    mult(operande) {
        this.resultat = this.resultat * operande;
        return this.resultat;
    }

    div(operande) {
        if (operande != 0) {
            this.resultat = this.resultat / operande;
            return this.resultat;
        }

        return this.resultat;
    }

    setOperation(op) {

        this.applyOperation();

        switch (this.operation) {
            case "+":
                this.operation = "+";
                break;
            case '-':
                this.operation = "-";
                break;
            case '*':
                this.operation = "*";
                break;
            case '/':
                this.operation = "/";
                break;
            case '=':
                this.operation = '=';
                break; // Useless yet rigorous.
            default:
                this.result = this.operande;
        }
    }

    applyOperation() {
        switch (this.operation) {
            case "+":
                this.add(this.operande);
                break;
            case '-':
                this.sub(this.operande);
                break;
            case '*':
                this.mult(this.operande);
                break;
            case '/':
                this.div(this.operande);
                break;
        }
    }

    // Fonctions sur les chaines de l'affichage.
    addDigit(digit) {
        if (this.operande == "0") {
            this.operande = digit;
        } else {
            if (!(this.operande.includes('.') && digit != '.')) {
                this.operande = this.operande + digit;
            }

        }
        console.log("Operande: " + this.operande);
        this.updateDisplay();
        return this.operande;
    }

    removeDigit() {
        // 
        if (this.operande.length > 1) {
            this.operande = this.operande.substring(0, this.operande.length - 1);
        } else {
            this.operande = "0";
        }

        this.updateDisplay();
        return this.operande;
    }

    invertSign() {
        // Si signe moins on supprime le moins du début.
        if (this.operande.charAt(0) == "-") {
            this.operande = this.operande.substring(1, this.operande.length);
        } else {
            this.operande = "-" + this.operande;
        }

        this.updateDisplay();
    }

    // Met à jour l'affichage
    updateDisplay() {
        let display = document.getElementById("affichage");
        display.innerHTML = this.operande;
    }

    /*/ Variante surchargée si on veut afficher un message.
    updateDisplay(msg) {
        this.operande = msg; //
        this.updateDisplay();
    }// Finalement non*/

    // Fonctions liées aux opérations complémentaires
    clearAllOps() {
        this.resultat = 0;
        this.clearOperand();

        this.updateDisplay();
    }

    clearOperand() {
        this.operande = 0;
    }


}

function main() {
    // Active ou désactive les sortie de test.
    const DEBUG = false;

    console.log("Starting the calculator.");

    if (DEBUG)
        TestCalculatrice();
}

// Création d'une instance de calculatrice.
var calc = new Calculatrice(0);

// Fonction de test rapide. A permis de résoudre un bug. ← C'est utile les tests.
function TestCalculatrice() {
    console.log("Testing operations");
    console.log(calc.add(10)); //10
    console.log(calc.mult(2)); // 20
    console.log(calc.sub(2)); // 18
    console.log(calc.div(3)); // 6
    console.log("Testing string functions");
    console.log(calc.addDigit("5")); //5
    console.log(calc.removeDigit()); // 0
    console.log(calc.removeDigit()); // 0
    console.log(calc.removeDigit()); // 0
    console.log(calc.removeDigit()); // 0
    console.log(calc.addDigit("5")); //5
    console.log(calc.addDigit("6")); //6
    console.log(calc.addDigit("4")); //4
    console.log(calc.removeDigit()); // 56
    console.log(calc.removeDigit()); // 5
    console.log(calc.removeDigit()); // 0
}
