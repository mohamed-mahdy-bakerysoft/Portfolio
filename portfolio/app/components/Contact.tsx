export default function Contact() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("Message sent");
  };
  return (
    <section className="contact py-20 bg-white text-primary">
      <div className="w-[60%] mx-auto">
        <h2 className="text-4xl font-bold text-center">Contact</h2>
        <div className="justify-center items-center bg-primary-700 text-primary-100 rounded-lg shadow-lg">
          <form>
            <div className="w-full flex flex-row my-4 items-center justify-center">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-[50%] mt-8 p-2 rounded-md"
              />
            </div>
            <div className="w-full flex flex-row my-4 items-center justify-center">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-[50%] mt-4 p-2 rounded-md"
              />
            </div>
            <div className="w-full flex flex-row my-4 items-center justify-center">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="w-[50%] my-4 p-2 rounded-md h-[180px]"
              />
            </div>
            <div className="w-full flex flex-row my-4 items-center justify-center">
              <button
                onClick={handleClick}
                className="w-[50%] mb-8 p-2 rounded-md bg-primary-400 text-primary-100"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
