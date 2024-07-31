function Contact() {
  return (
    <div className="flex-grow flex items-center justify-center">
      <main className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4">contacts</h1>
        <p className="text-lg">
          my phone number: 0765823655
        </p>
        <p className="text-lg">
          my email: raducea.matei2005@gmail.com
        </p>
        <p className="text-lg">
          <a 
            href="https://github.com/Jupyyter?tab=repositories" 
            className="text-yellow-400 hover:text-yellow-300 underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            my github repositories
          </a>
        </p>
      </main>
    </div>
  )
}

export default Contact;