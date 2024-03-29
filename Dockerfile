# # JDK8 이미지 사용
FROM openjdk:8-jdk

# Add Author info
LABEL maintainer="dudrl0944@gmail.com"

# Add a volume to /tmp
VOLUME /tmp

# Make port 8080 available to the world outside this container
EXPOSE 8080

# # JAR_FILE 변수에 값을 저장
ARG JAR_FILE=./backend-java/build/libs/ssafy-web-project-1.0-SNAPSHOT.jar

# # 변수에 저장된 것을 컨테이너 실행시 이름을 app.jar파일로 변경하여 컨테이너에 저장
COPY ${JAR_FILE} app.jar

# Timezone setting
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Seoul

RUN apt-get install -y tzdata

# # 빌드된 이미지가 run될 때 실행할 명령어
ENTRYPOINT ["java","-jar","app.jar"]
