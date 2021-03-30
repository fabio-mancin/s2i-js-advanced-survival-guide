# Git Basics

- [Git Basics](#git-basics)
  - [Scopo della guida](#scopo-della-guida)
  - [Cos'è Git](#cosè-git)
  - [CLI vs GUI](#cli-vs-gui)
    - [Risorse aggiuntive](#risorse-aggiuntive)
  - [Preparare l'ambiente](#preparare-lambiente)
  - [Creare un repository e modificarlo](#creare-un-repository-e-modificarlo)
  - [The show must go on](#the-show-must-go-on)

***

## Scopo della guida

Questa non vuole essere una guida all'uso di Git e GitHub, ma una traccia per la scelta dell'interfaccia che verrà utilizzata, un mini tutorial di configurazione generico e qualche nozione di utilizzo per le esigenze dei progetti che stiamo seguendo ora in s2i.

***

## Cos'è Git

> Git è un software sviluppato per tracciare i cambiamenti in un gruppo di file, spesso utilizzato da gruppi di lavoro per coordinarsi durante lo sviluppo di applicazioni. Esempio pratico:

    Bilbo Baggins e Anakin Skywalker stanno lavorando ad un videogioco open source chiamato "Disney's Avengers and the Goblet of Fire".

    Bilbo lavorerà sulla parte dei cani volanti, mentre Anakin si occuperà dei combattimenti di karate.

    Bilbo e Anakin si appoggiano ad una piattaforma che permette loro di lavorare contemporaneamente sul videogioco.

    Una volta terminato il loro compito manderanno i cambiamenti alla piattaforma che si occuperà di integrarli nel risultato finale.

La piattaforma che usano è **GitHub** (ce ne sono anche altre ma è la più famosa e che useremo anche noi); il videogioco su cui lavorano contemporaneamente è messo online su un **repository**, le parti su cui stanno lavorando sono le **branch(es)**; tutto il sistema si basa su **Git**.

***

## CLI vs GUI

Ci sono due principali scelte per interagire con GitHub: la riga di comando (Command Line Interface - CLI) e l'interfaccia grafica (GUI).

Spesso viene passata l'idea che la GUI sia inferiore in tutto e per tutto alla CLI: è **falso** - la CLI è certamente superiore a livello di controllo in quanto ha accesso a tutte le funzioni di GIT, ma per l'uso giornaliero la versione desktop va benissimo, in quanto quelle funzioni non vengono usate molto spesso e sicuramente non al nostro livello di apprendimento; d'altra parte la GUI ha una curva di apprendimento **molto** più dolce e risulta più "familiare" nell'uso.

Ripeto: entrambe le modalità sono valide e funzionano, quindi scegliete in base ad esperienza e preferenza personale: io, per chi si avvicina ora a Git e GitHub, consiglio la versione Desktop.

### Risorse aggiuntive

[Download GitHub CLI](https://github.com/cli/cli/releases/latest)  
[Docs ufficiali CLI](https://cli.github.com/manual/index)

[Download GitHub Desktop](https://desktop.github.com/)  
[Docs ufficiali GitHub Desktop](https://docs.github.com/en/desktop)

[Comparazione fra GHDesktop e CLI](https://www.slant.co/versus/1501/13488/~the-command-line_vs_github-desktop)  
[Guida ben scritta su Git](https://flaviocopes.com/git/)

***

## Preparare l'ambiente

Qui prepariamo l'ambiente di lavoro qualunque sia la modalità con cui useremo GitHub.

La guida si riferisce a Windows 10; non ho esperienza sufficiente con altri OS per scrivere una parte dedicata.. per ora ;)

1) Registrarsi su [GitHub](https://github.com)

   - Consiglio di attivare l'autenticazione a 2 fattori per aumentare la sicurezza!

2) Installare Git da [qui](https://git-scm.com/download/win); io ho scelto queste opzioni ma ovviamente sono personali, fate come ritenete più adatto alle vostre esigenze:

    > - :black_square_button: Additional icons
    >   - :black_square_button: On the Desktop
    > - :black_square_button: Windows Explorer integration
    >   - :black_square_button: Git Bash Here
    >   - :black_square_button: Git GUI Here
    > - :white_check_mark: Git LFS
    > - :white_check_mark: Associate .git* [...]
    > - :white_check_mark: Associate .sh [...]
    > - :black_square_button: Use a TrueType font in all console windows
    > - :white_check_mark: Check daily for Git for Windows updates

    - Scegliere l'editor che userete per programmare (io uso VSCode)
    - Scegliere "Override the default branch name for new repositories", lasciando `main` come già inserito
    - Lasciare tutte le scelte successive a quella già selezionata dall'installer
  
3) Sistemare la PATH di Windows:
   - Tasto destro su `Questo PC` > `Proprietà` > `Impostazioni di sistema avanzate` > `Variabili di ambiente`
   - Nella sezione in basso `Variabili di sistema` selezionare `Path` e cliccare `Modifica`
   - Cliccare su `Nuovo` e scrivere `[...posizione dove avete installato Git]\Git\bin`
   - Ci dovrebbero quindi essere due variabili per Git, simili a

          C:\Program Files\Git\cmd
          C:\Program Files\Git\bin
   - Premere `OK` > `OK` > `OK` per uscire dalla configurazione

4) Per verificare che tutto sia andato a buon fine digitare in una finestra PowerShell

        `git --version`

   dovrebbe comparire una scritta simile a

        git version 2.xx.x.windows.1

    Se il comando è andato a buon fine l'installazione è riuscita con successo e possiamo cominciare, altrimenti c'è stato qualche errore nei passaggi della preparazione.

5) Per identificarsi con Git scrivere sempre da finestra PowerShell:

        git config --global user.email "tua-mail@mail.com"
        git config --global user.name "Il Tuo Nome"

***

## Creare un repository e modificarlo

> Dopo questo passo la procedura cambia in base all'interfaccia utilizzata; dato che questa guida vuole essere soltanto un'introduzione, non spiegherò come fare quella parte. Le guide linkate [qui](#risorse-aggiuntive) sono un ottimo punto di partenza per imparare.

- Andare all'interfaccia di creazione di un nuovo repository [qui](https://github.com/new)
  - Solo nome e visibilità del repository sono obbligatori
  - Per una configurazione standard **suggerisco** di aggiungere una descrizione ed anche i campi  
    - :white_check_mark: Add a README file  
    - :white_check_mark: Add .gitignore > in base al progetto che si sta creando  
    - :white_check_mark: Choose a license > `MIT`

- Scaricare ed installare CLI o GUI e..

    1) Clonare in locale un repository
        - In parole povere scaricare i file che sono online i questo momento sul proprio PC
    2) Lavorare sui file in locale
        - Le modifiche per ora restano sul proprio PC, quindi anche in caso di errori si può tornare all'ultima versione scaricata al punto 1
        - Questo è il bello del versionamento: si scarica una versione funzionante del software e si lavora localmente senza rischi su una nuova feature: una volta che la feature funziona..
    3) Pushare i cambiamenti sul repository online
         - La feature funzionante viene integrata nella versione online e si può cominciare a lavorare in sicurezza su un'altra

- **Attenzione:** l'uso che facciamo di Git al momento è parziale: la piattaforma è pensata per lavorare in team con l'uso del branching, dove probabilmente si avrà una branch per la versione in produzione (tutto funzionante) e molte altre branch di sviluppo con nuove feature che vengono man mano integrate nella versione in produzione quando sono pronte.
  
- Il nostro uso di Git al momento si limita a mettere online un repository per
  
    1) Permettere al pubblico (coach, datori di lavoro, altri developer) di vedere il nostro codice sorgente

    2) Utilizzare il Continuous Deployment di piattaforme come Firebase e Netlify ([vedi qui per un esempio](https://github.com/fabio-mancin/s2i-js-advanced-survival-guide#live-demo-dilemma))

    3) Imparare le basi della piattaforma per poterne in futuro sfruttare a pieno le funzioni

***

## The show must go on

Come sempre aspetto il vostro feedback!  
[Sul mio sito](https://www.fabiomancin.dev)  
[Su discord](https://discordapp.com/users/fender90#9251/)
