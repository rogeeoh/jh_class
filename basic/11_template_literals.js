const name = 'rogee';

// 더하기 연산자로 string을 더할 수도 있지만,
console.log('hello ' + name);

// 백틱을 이용해서 템플릿을 만들면 쉽게 string을 조합할 수 있다.
console.log(`hello ${name}`)

// 여러 줄도 가능하다
const image = 'nginx:1.14.2';
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
`

console.log(multiLines);
