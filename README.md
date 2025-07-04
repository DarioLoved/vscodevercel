# Gestione Bollette App

Questa applicazione web consente di gestire le spese delle bollette per più case e persone. È progettata per essere accessibile da qualsiasi dispositivo tramite URL, senza necessità di autenticazione.

## Caratteristiche

- Gestione di più case e persone
- Interfaccia ottimizzata per dispositivi mobili
- Inserimento dati semplice e intuitivo
- Calcoli automatici delle spese
- Report dettagliati e grafici delle spese

## Struttura del Progetto

```
gestione-bollette-app
├── public
│   └── index.html          # Punto di ingresso dell'applicazione
├── src
│   ├── assets              # Risorse statiche (immagini, icone)
│   ├── components          # Componenti React
│   │   ├── BillForm.tsx    # Componente per l'inserimento delle bollette
│   │   ├── HouseList.tsx    # Componente per la gestione delle case
│   │   ├── PersonList.tsx   # Componente per la gestione delle persone
│   │   ├── Report.tsx       # Componente per la generazione dei report
│   │   └── Chart.tsx        # Componente per la visualizzazione dei grafici
│   ├── pages               # Pagine dell'applicazione
│   │   ├── Home.tsx        # Pagina principale
│   │   └── Dashboard.tsx    # Pagina dei dettagli di una casa
│   ├── styles              # Stili CSS
│   │   └── main.css        # Stili ottimizzati per dispositivi mobili
│   ├── utils               # Funzioni utili
│   │   └── calculations.ts  # Calcoli relativi alle bollette
│   ├── types               # Tipi TypeScript
│   │   └── index.ts        # Interfacce e tipi utilizzati
│   └── App.tsx            # Componente principale dell'app
├── package.json            # Configurazione npm
├── tsconfig.json           # Configurazione TypeScript
└── README.md               # Documentazione del progetto
```

## Installazione

1. Clona il repository:
   ```
   git clone <URL del repository>
   ```
2. Naviga nella cartella del progetto:
   ```
   cd gestione-bollette-app
   ```
3. Installa le dipendenze:
   ```
   npm install
   ```

## Esecuzione

Per avviare l'applicazione in modalità sviluppo, esegui:
```
npm start
```

L'app sarà disponibile all'indirizzo `http://localhost:3000`.

## Contribuzione

Se desideri contribuire al progetto, sentiti libero di aprire una pull request o segnalare problemi.

## Licenza

Questo progetto è sotto licenza MIT.