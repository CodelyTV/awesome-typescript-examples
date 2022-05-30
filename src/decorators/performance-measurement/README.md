# Decorators Performance Measurement Example

How to start the API server:
```bash
cd src/decorators/performance-measurement
npx ts-node-dev ./api-with-decortator.ts
```

How to make requests:

- Without specifying the fibonacci number to calculate:
```bash
curl http://localhost:8000
{"data":{"response":1},"metadata":{"dateTime":1653983966650,"serverIp":"192.168.4.1"}}
```

- Specifying the fibonacci number to calculate:
```bash
curl http://localhost:8000?number=6
{"data":{"response":8},"metadata":{"dateTime":1653984048726,"serverIp":"192.168.4.1"}}
```
