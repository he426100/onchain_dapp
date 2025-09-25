import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;
app.use(express.static(join(__dirname, 'docs')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'index.html'));
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
app.get('/webview', (req, res) => {
  res.download(join(__dirname, 'docs', 'webview.js'), 'webview.js', (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});
app.get('/webview_page', (req, res) => {
  res.download(join(__dirname, 'docs', 'webview_page.js'), 'webview.js', (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});
app.get('/tronweb', (req, res) => {
  res.download(join(__dirname, 'docs', 'tronweb.js'), 'tronweb.js', (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

/// bitcoin
app.get('/wc_bitcoin', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/bitcoin/wc_bitcoin.html'));
});
app.get('/ws_bitcoin', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/bitcoin/ws_bitcoin.html'));
});
/// bch
app.get('/wc_bch', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/bch/wc_bch.html'));
});
app.get('/ws_bch', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/bch/ws_bch.html'));
});

/// ripple
app.get('/ws_ripple', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/ripple/ws_ripple.html'));
});

// ton
app.get('/ws_ton', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/ton/ws_ton.html'));
});
app.get('/wc_ton', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/ton/wc_ton.html'));
});

// tron
app.get('/ws_tron', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/tron/ws_tron.html'));
});
app.get('/wc_tron', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/tron/wc_tron.html'));
});
app.get('/tip1193_tron', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/tron/tip_tron.html'));
});


// solana
app.get('/ws_solana', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/solana/ws_solana.html'));
});
app.get('/wc_solana', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/solana/wc_solana.html'));
});

// ethereum
app.get('/ws_ethereum', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/ethereum/ws_eth.html'));
});
app.get('/wc_ethereum', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/ethereum/wc_eth.html'));
});
app.get('/eip6963_ethereum', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/ethereum/eip6963_eth.html'));
});
app.get('/eip1193_ethereum', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/ethereum/eip1193_eth.html'));
});

/// substrate
app.get('/ws_substrate', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/substrate/ws_substrate.html'));
});
app.get('/wc_substrate', (req, res) => {
  res.sendFile(join(__dirname, 'docs', 'pages/substrate/wc_substrate.html'));
});