## Running the Project Locally

### Prerequisites

- Ruby 3.4.2
- Node.js v22.13.0
- Bundler (`gem install bundler`)

### Setup

1. **Clone the repository:**
   ```sh
   git clone
   cd personifi
    ```
2. **Install Ruby dependencies:**
   ```sh
   bundle install
   ```
3. **Install Node.js dependencies:**
   ```sh
   npm install
   ```
4. **Set up the database:**
   ```sh
   bundle exec rails db:create db:migrate db:seed
   ```
5. **Start the Rails server:**
   ```sh
   bundle exec rails server
   - OR -
   rails s
    ```
6. **Start the client dev server:**
   ```sh
   npm run dev
   ```
   
7. **Run the app in browser**
   ```
   localhost:3000
   ```