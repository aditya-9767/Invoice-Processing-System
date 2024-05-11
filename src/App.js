import { useState, useRef } from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";
import ReactToPrint from 'react-to-print'



function App() {

  const [showInvoice, setShowInvoice] = useState(true)
  const [name, setName] = useState("ACUBE Workflow Ventures")
  const [address, setAddress] = useState("Pune")
  const [email, setEmail] = useState("aditya@sahaayak.in")
  const [phone, setPhone] = useState("+91 8788272259")
  const [bankName, setBankName] = useState("YES Bank")
  const [bankAccount, setBankAccount] = useState("6765 3242 6753 2464")
  const [website, setWebsite] = useState("https://www.sahaayak.com")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNUmber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("Invoice is generated according to your details")
  
  const [description , setDescription] = useState("")
  const [quantity , setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")

  const [list, setList] = useState([])

  const [total, setTotal] = useState(0)

  const componentRef = useState()


  const handlePrint = () => {
    window.print();
  }

  return (
  <>
    <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
      
      
      {showInvoice ? (
        <>
      <ReactToPrint trigger={() => <button className="bg-blue-500 ml-5 text-green py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Print / Download</button>} content={() => componentRef.current}/>


      <div ref={componentRef} className="p-5">
        <Header/>

        <MainDetails name={name} address={address}/>

        <ClientDetails clientName={clientName} clientAddress={clientAddress}/>

        <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/>

        <Table description={description} quantity={quantity} price={price} amount={amount} list={list} setList={setList} total={total} setTotal={setTotal}/>

        <Notes notes={notes}/>

        <Footer name={name} address={address} website={website} email={email} phone={phone} bankAccount={bankAccount} bankName={bankName}/>

        </div> 
        <button onClick={() => setShowInvoice(false)} className="mt-5 bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 ">Edit Information</button>
        </>

        ) : (
          <>
          <div className="flex flex-col justify-center">
          
          <article className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
          <label htmlFor="name">Your full name</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="flex flex-col">
          <label htmlFor="address">Enter Your Address</label>
          <input type="text" name="address" id="address" placeholder="Enter your address" autoComplete="off" value={address} onChange={(e) => setAddress(e.target.value)}/>
          </div>
          </article>

          <article className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
          <label htmlFor="email">Enter Your Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="flex flex-col">
          <label htmlFor="website">Enter Your Website</label>
          <input type="url" name="website" id="website" placeholder="Enter your website" autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)}/>
          </div>

          <div className="flex flex-col">
          <label htmlFor="phone">Enter Your phone no.</label>
          <input type="text" name="phone" id="phone" placeholder="Enter your phone no." autoComplete="off" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>
          </article>

          <article className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
          <label htmlFor="bankName">Enter Your Bank Name</label>
          <input type="text" name="bankName" id="bankName" placeholder="Enter your bank name" autoComplete="off" value={bankName} onChange={(e) => setBankName(e.target.value)}/>
          </div>

          <div className="flex flex-col">
          <label htmlFor="bankAccount">Enter Your Bank Account Number</label>
          <input type="text" name="bankAccount" id="bankAccount" placeholder="Enter your bank account number" autoComplete="off" value={bankAccount} onChange={(e) => setBankAccount(e.target.value)}/>
          </div>
          </article>

          <article className="md:grid grid-cols-2 gap-10 md:mt-16">
          <div className="flex flex-col">
          <label htmlFor="clientName">Enter Your Client Name</label>
          <input type="text" name="clientName" id="clientName" placeholder="Enter your client name" autoComplete="off" value={clientName} onChange={(e) => setClientName(e.target.value)}/>
          </div>

          <div className="flex flex-col">
          <label htmlFor="clientAddress">Enter Your Client Address</label>
          <input type="text" name="clientAddress" id="clientAddress" placeholder="Enter your client address" autoComplete="off" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)}/>
          </div>
          </article>

          <article className="md:grid grid-cols-3 gap-10 md:mt-10">
          <div className="flex flex-col">
          <label htmlFor="invoiceNumber">Enter Your Invoice Number</label>
          <input type="text" name="invoiceNumber" id="invoiceNumber" placeholder="Enter your invoice number" autoComplete="off" value={invoiceNumber} onChange={(e) => setInvoiceNUmber(e.target.value)}/>
          </div>

          <div className="flex flex-col">
          <label htmlFor="invoiceDate">Enter Your Invoice Date</label>
          <input type="date" name="invoiceDate" id="invoiceDate" placeholder="Enter your invoice date" autoComplete="off" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)}/>
          </div>

          <div className="flex flex-col">
          <label htmlFor="dueDate">Enter Your Due Date</label>
          <input type="date" name="dueDate" id="dueDate" placeholder="Enter your due date" autoComplete="off" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
          </div>
          </article>

          <article>
            <TableForm description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} amount={amount} setAmount={setAmount} list={list} setList={setList} total={total} setTotal={setTotal}/>
          </article>

          <label htmlFor="notes">Enter Your Notes</label>
          <textarea name="notes" id="notes" cols='30' rows='10' placeholder="Additional notes to the client" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>

          <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 ">Preview Invoice</button>
          </div>
          </>

      )}
      
    </main>
  </>
  );
}

export default App;
