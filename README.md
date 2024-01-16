## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Onvce the server is operational, you can trigger a device sharing procedure with the following command

```bash
mqtt pub -t 'start/device/sharing' -h 'test.mosquitto.org' -m '{"shareToken": "1", "JWTCertificate": "2", "JWTTrustAnchor": "3", "JWTConfiguration": "4", "UplinkTrustAnchor": "5", "UplinkConfiguration": "6"}'
```
