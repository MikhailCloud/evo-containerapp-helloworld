# Пример развертывания react-приложения на Evolution Container Apps
Этот пример демонстрирует как развернуть веб-приложение разработанное на React в Evolution Container Apps за несколько шагов.

<img width="700" alt="image" src="https://github.com/CLOUDdotRu/evo-containerapp-react-sample/assets/129149541/7497f9ca-d607-44c9-9ae9-1e23141ce51b">

1. Собрать docker-образ для вашего приложения под платформу linux/amd64. В данном примере готовый Dockerfile находится в репозитории.
   
   `docker build --tag helloworld.cr.cloud.ru/react-hello-world https://gitverse.ru/sc/cloudru/evo-containerapp-react-sample.git#master --platform linux/amd64`
3. Загрузить собранный образ в Evolution Container Registry

   `docker login helloworld.cr.cloud.ru -u <keyid> -p <password>`
   
   `docker push helloworld.cr.cloud.ru/react-hello-world`
4. Из контекстного меню в Evolution Container Registry выберите Создать Container App. Необходимо указать порт контейнера в соотвествии с указанным в Dockerfile. В данном случае 8080.
   
5. Ваше приложение готово и доступно по публичному адресу в формате `container-name.containers.cloud.ru`
