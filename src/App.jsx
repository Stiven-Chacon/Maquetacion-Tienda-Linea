import SideBar from "./components/shared/SideBar"
import {
  RiMenuFill, RiUser3Fill, RiAddCircleLine, RiPieChartFill, RiCloseCircleFill, RiSearchLine
  , RiArrowDownSFill, RiDeleteBin5Fill
} from "react-icons/ri";
import { useState } from "react";

/* md para ipad, lg para pc */
function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);

  }
  const toggleOrdens = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);

  }

  return (
    <div className='bg-[#262837] w-full min-h-screen'>
      <SideBar showMenu={showMenu} />
      {/* Menu Movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8
       flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        {/* Primer Boton */}
        <button className="p-2">
          <RiUser3Fill />
        </button>
        {/* Segundo boton */}
        <button className="p-2">
          <RiAddCircleLine />
        </button>
        {/* Tercer Boton */}
        <button className="p-2" onClick={toggleOrdens}>
          <RiPieChartFill />
        </button>
        {/* Cuarto Boton */}
        <button className="text-white p-2" onClick={toggleMenu}>
          {showMenu ? <RiCloseCircleFill /> : <RiMenuFill />}

        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 pb-20">
        <div className="lg:col-span-6 md:p-8 p-4">
          {/* Header */}
          <header>
            {/* Titulo y buscador */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Stiven Chacón</h1>
                <p className="text-gray-500">18 Noviembre 2023</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearchLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input placeholder="Buscar...." type="text" className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4  rounded-lg text-gray-300
                outline-none"/>
                </div>
              </form>
            </div>
            {/* pestañas */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]">Platos Caliente</a>
              <a href="#" className="py-2 pr-4">Platos Frios</a>
              <a href="#" className="py-2 pr-4">Sopas</a>
              <a href="#" className="py-2">Parrilla</a>

            </nav>
          </header>
          {/* Titulo Contenedor */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Elegir Platos</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSFill /> Filtrar
            </button>
          </div>
          {/* Contenido */}
          <div className="p-8 grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-[#1F1D2B] p-8  rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img src="comida.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Pollo con vegetales</p>
              <span className="text-gray-400">$25.000</span>
              <p className="text-gray-600">Preparado con el mejor pollo de colombia</p>

            </div>
            {/* Card 2*/}
            <div className="bg-[#1F1D2B] p-8  rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img src="dish.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Pasta con vegetales</p>
              <span className="text-gray-400">$25.000</span>
              <p className="text-gray-600">Preparado con la mejor pasta de colombia</p>

            </div>
            {/* Card 3 */}
            <div className="bg-[#1F1D2B] p-8  rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img src="comida.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Pollo con vegetales</p>
              <span className="text-gray-400">$25.000</span>
              <p className="text-gray-600">Preparado con el mejor pollo de colombia</p>

            </div>
            {/* Card 4*/}
            <div className="bg-[#1F1D2B] p-8  rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img src="dish.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Pasta con vegetales</p>
              <span className="text-gray-400">$25.000</span>
              <p className="text-gray-600">Preparado con la mejor pasta de colombia</p>

            </div>
            {/* Card 5*/}
            <div className="bg-[#1F1D2B] p-8  rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img src="comida.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Pollo con vegetales</p>
              <span className="text-gray-400">$25.000</span>
              <p className="text-gray-600">Preparado con el mejor pollo de colombia</p>

            </div>
            {/* Card 6*/}
            <div className="bg-[#1F1D2B] p-8  rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img src="dish.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Pasta con vegetales</p>
              <span className="text-gray-400">$25.000</span>
              <p className="text-gray-600">Preparado con la mejor pasta de colombia</p>
            </div>
            {/* Card 7*/}
            <div className="bg-[#1F1D2B] p-8  rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img src="comida.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Pollo con vegetales</p>
              <span className="text-gray-400">$25.000</span>
              <p className="text-gray-600">Preparado con el mejor pollo de colombia</p>
            </div>
            {/* Card 8*/}
            <div className="bg-[#1F1D2B] p-8  rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img src="dish.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Pasta con vegetales</p>
              <span className="text-gray-400">$25.000</span>
              <p className="text-gray-600">Preparado con la mejor pasta de colombia</p>
            </div>
            {/* Card 9*/}
            <div className="bg-[#1F1D2B] p-8  rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img src="comida.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Pollo con vegetales</p>
              <span className="text-gray-400">$25.000</span>
              <p className="text-gray-600">Preparado con el mejor pollo de colombia</p>
            </div>
          </div>
        </div>
        <div className={`lg:col-span-2 fixed lg:right-0 lg:w-96 top-0 bg-[#1F1D2B] w-full h-full transition-all
        ${showOrder ? "right-0" : "-right-full"}`}>
          {/* Ordenes */}
          <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
            <RiCloseCircleFill onClick={toggleOrdens}
              className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
            <h1 className="text-2xl my-4">Orden #1</h1>
            {/* pestañas carrito */}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <button className="bg-[#EC7C6A] text-white py-2 px-4 rounded-xl">Tu orden</button>
              <button className=" text-[#EC7C6A] py-2 px-4 rounded-xl border border-gray-500">Ir</button>
              <button className=" text-[#EC7C6A] py-2 px-4 rounded-xl border border-gray-500">Entrega</button>
            </div>
            {/* carrito */}
            <div>
              <div className="grid grid-cols-7 mb-4 p-4">
                <h5 className="col-span-4">Productos</h5>
                <h5 className="col-span-2">Cantidad</h5>
                <h5>Precio</h5>
              </div>
              {/* Productos */}
              <div className="h-[400px] md:h-[550px] lg:h-[550px] overflow-scroll">
                {/* Producto 1*/}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-3">
                    {/* Descripcion del producto */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img src="comida.png" className="w-10 h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">Pollo con Vege...</h5>
                        <p className="text-xs text-gray-500">$25.000</p>
                      </div>
                    </div>
                    {/* Cantidad */}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Precio */}
                    <div>
                      <span>$50.000</span>
                    </div>
                  </div>
                  {/* Nota */}
                  <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-4">
                      <input type="text" className="bg-[#1F1D2B] py-2 px-2 rounded-lg outline-none"
                        placeholder="Orden agregada......" />
                    </form>
                    <div className="col-span-2 text-center pl-9">
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin5Fill className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Producto 2 */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-3">
                    {/* Descripcion del producto */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img src="dish.png" className="w-10 h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">pasta con Vege...</h5>
                        <p className="text-xs text-gray-500">$25.000</p>
                      </div>
                    </div>
                    {/* Cantidad */}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Precio */}
                    <div>
                      <span>$50.000</span>
                    </div>
                  </div>
                  {/* Nota */}
                  <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-4">
                      <input type="text" className="bg-[#1F1D2B] py-2 px-2 rounded-lg outline-none"
                        placeholder="Orden agregada......" />
                    </form>
                    <div className="col-span-2 text-center pl-9">
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin5Fill className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Producto 3*/}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-3">
                    {/* Descripcion del producto */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img src="comida.png" className="w-10 h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">Pollo con Vege...</h5>
                        <p className="text-xs text-gray-500">$25.000</p>
                      </div>
                    </div>
                    {/* Cantidad */}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Precio */}
                    <div>
                      <span>$50.000</span>
                    </div>
                  </div>
                  {/* Nota */}
                  <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-4">
                      <input type="text" className="bg-[#1F1D2B] py-2 px-2 rounded-lg outline-none"
                        placeholder="Orden agregada......" />
                    </form>
                    <div className="col-span-2 text-center pl-9">
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin5Fill className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Producto 4 */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-3">
                    {/* Descripcion del producto */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img src="dish.png" className="w-10 h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">pasta con Vege...</h5>
                        <p className="text-xs text-gray-500">$25.000</p>
                      </div>
                    </div>
                    {/* Cantidad */}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Precio */}
                    <div>
                      <span>$50.000</span>
                    </div>
                  </div>
                  {/* Nota */}
                  <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-4">
                      <input type="text" className="bg-[#1F1D2B] py-2 px-2 rounded-lg outline-none"
                        placeholder="Orden agregada......" />
                    </form>
                    <div className="col-span-2 text-center pl-9">
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin5Fill className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Producto 5*/}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-3">
                    {/* Descripcion del producto */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img src="comida.png" className="w-10 h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">Pollo con Vege...</h5>
                        <p className="text-xs text-gray-500">$25.000</p>
                      </div>
                    </div>
                    {/* Cantidad */}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Precio */}
                    <div>
                      <span>$50.000</span>
                    </div>
                  </div>
                  {/* Nota */}
                  <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-4">
                      <input type="text" className="bg-[#1F1D2B] py-2 px-2 rounded-lg outline-none"
                        placeholder="Orden agregada......" />
                    </form>
                    <div className="col-span-2 text-center pl-9">
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin5Fill className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Producto 6 */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-3">
                    {/* Descripcion del producto */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img src="dish.png" className="w-10 h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">pasta con Vege...</h5>
                        <p className="text-xs text-gray-500">$25.000</p>
                      </div>
                    </div>
                    {/* Cantidad */}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Precio */}
                    <div>
                      <span>$50.000</span>
                    </div>
                  </div>
                  {/* Nota */}
                  <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-4">
                      <input type="text" className="bg-[#1F1D2B] py-2 px-2 rounded-lg outline-none"
                        placeholder="Orden agregada......" />
                    </form>
                    <div className="col-span-2 text-center pl-9">
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin5Fill className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Datos De La Compra */}
            <div className="bg-[#262837] absolute bottom-0 left-0 p-4 w-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Descuento</span>
                <span>$50.000</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400">SubTotal</span>
                <span>$200.000</span>
              </div>
              <div>
                <button className="bg-[#EC7C6A] w-full py-2 px-4 rounded-lg">Ordenar</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
