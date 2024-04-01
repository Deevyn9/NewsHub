# NewsHub

NewsHub is a web application that aggregates news articles from various sources and presents them in an organized and user-friendly manner.

# NewsHub

![Main Page]([https://github.com/yourusername/newshub/raw/main/images/main_page.png](https://github.com/Deevyn9/NewsHub/blob/master/src/assets/snapshots/NewsHub%20Home.png))

![Search Modal]([https://github.com/yourusername/newshub/raw/main/images/search_modal.png](https://github.com/Deevyn9/NewsHub/blob/master/src/assets/snapshots/NewsHub%20SearchModal.png))


## Local Setup

To run NewsHub locally on your system, follow these steps:

1. Clone this repository to your local machine using the following command:

   ```
   git clone https://github.com/deevyn9/newshub.git
   ```

2. Navigate to the project directory:

   ```
   cd newshub
   ```

3. Install the required dependencies by running:

   ```
   npm install
   ```

4. After the dependencies are installed, start the development server by running:

   ```
   npm run dev
   ```

5. Open your web browser and visit [http://localhost:5173](http://localhost:5173) to view NewsHub.

## Docker Containerization (Issue Under Investigation)

Please note that there was an issue with containerizing NewsHub using Docker. Efforts are underway to resolve this issue, Please run NewsHub locally as described above. The Docker containerization process is encountering port binding issues, preventing the application from running smoothly in a Docker container. This issue is being actively addressed.

## Filtering by Categories

Please note that the filtering feature by categories has been disabled in this version of NewsHub. This decision was made due to limitations in the APIs selected for aggregating news articles. Some of the APIs do not provide support for filtering articles by categories.
