import React from 'react';
import './App.css'; 

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const desb = formData.get('desb');
    const image1 = formData.get('image1');
    const image2 = formData.get('image2');
    alert(`Name: ${name}\nMovie Description: ${desb}\nImage 1: ${image1}\nImage 2: ${image2}`);
  };

  return (
    <>
     <body>
    <header>
        <nav>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="hero">
            <h1>ASTRA</h1>
            <p>Experience the thrill of driving with our premium cars</p>
            <button>Learn More</button>
        </section>
        <section class="features">
            <h2>What sets us apart</h2>
            <ul>
                <li>
                    <i class="fas fa-cog"></i>
                    <h3>Advanced Technology</h3>
                    <p>Our cars feature the latest technology to ensure a safe and enjoyable ride</p>
                </li>
                <li>
                    <i class="fas fa-trophy"></i>
                    <h3>Award-Winning Design</h3>
                    <p>Our cars have won numerous awards for their sleek and aerodynamic design</p>
                </li>
                <li>
                    <i class="fas fa-leaf"></i>
                    <h3>Eco-Friendly</h3>
                    <p>Our cars are designed to be environmentally friendly, reducing carbon emissions and promoting sustainability</p>
                </li>
            </ul>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 ASTRA. All rights reserved.</p>
    </footer>
    </body>
    </>
  );
}

export default App;
