// string 을 쓰는 새로운 방법
const name = "rogee";
console.log('hello ' + name + ' my name is JH');
console.log(`hello ${name} my name is JH`);

const image = "nginx:1.15";
const multiLines = `
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: ${image}
        ports
        - containerPort: 80
`;

console.log(multiLines);
