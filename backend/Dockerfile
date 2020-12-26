FROM python:3

WORKDIR /usr/src/backend

RUN pip install --upgrade pip

COPY requirements.txt ./

RUN pip install --user --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["python", "./app.py"]

# docker build --tag backend . 
# docker run --publish 5050:5000 --detach --name bb backend
# docker stop bb
# docker rm bb
# docker ps