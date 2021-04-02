// tslint:disable-next-line:class-name
export class _usuario {
  id: number;
  username: string;
  password: string;
  password5: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  mail: string;
  cargo: _puestos;
  avatar: string;
  razonSocial: _razonSocial;
  desde: Date;
  nuevo: boolean;
  enabled: boolean;
  accountExpired: boolean;
  accountLocked: boolean;
  passwordExpired: boolean;
  role: string;
}

// tslint:disable-next-line:class-name
export interface _roleDetalle {
  id: number;
  menu: string;
  habilitado: boolean;
  etiqueta: string;
  sistema: string;
  urlAjs: string;
}

// tslint:disable-next-line:class-name
export class _role {
  id: number;
  authority: string;
}

// tslint:disable-next-line:class-name
export class _combo {
  id: any;
  descripcion: any;
  cuenta?: any;
}

// tslint:disable-next-line:class-name
export class _comboFactura {
  id: any;
  descripcion: any;
  certificado: any;
  rfc: any;
  cp: any;
}
// tslint:disable-next-line:class-name
export class _puestos {
  id: number;
  puesto?: string;
  razonSocial?: _razonSocial;
}

// tslint:disable-next-line:class-name
export class _razonSocial {
  id: number;
  estatus: boolean;
  nombre: string;
  rfc: string;

  calle?: string;
  noExterior?: string;
  noInterior?: string;
  colonia?: string;
  codigoPostal?: string;
  localidad?: string;
  municipio?: string;
  estado?: string;
  pais?: string;
  telefono?: string;
  email?: string;
}

// tslint:disable-next-line:class-name
export class _bancos {
  id: number;
  descripcionCorta: string;
  descripcionLarga: string;
  direccion_clc: string;
  direccion_con: string;
  direccion_dis: string;
  pais: string;
}

// tslint:disable-next-line:class-name
export class _cuentaBancaria {
  id: number;
  razonSocial: _razonSocial;
  banco: _bancos;
  alias: string;
  cuenta: string;
  clabe: string;
  moneda: _divisa;
  fechaDeApertura: Date;
  estatus: string;
  fechaDeCancelacion: Date;
}

// tslint:disable-next-line:class-name
export class _divisa {
  id: number;
  clave: string;
  descripcion: string;
}

// tslint:disable-next-line:class-name
export class _lineaDeCredito {
  id: number;
  nombre: string;
  emisor: _razonSocial;
  receptor: _razonSocial;
  cuentaEmisor: _cuentaBancaria;
  cuentaReceptor: _cuentaBancaria;
  montoDeLaLinea: number;
  montoDisponible: number;
  saldoInsoluto: number;
  divisa: _divisa;
}

// tslint:disable-next-line:class-name
export class _proveedores {
  id: number;
  // razonSocial: _razonSocial;
  nombre: string;
  rfc: string;
  moneda: _divisa;
  nombreDeContacto: string;
  correoElectronico: string;
  direccion: string;
  telefono: string;
  estatus: string;
  tipo: string;
  open?: boolean;
}

// tslint:disable-next-line:class-name
export class _instruccionesDePago {
  id: number;
  proveedor: _proveedores;
  banco: _bancos;
  cuenta: string;
  clabe: string;
  moneda: _divisa;
  convenio: string;
  referencia: string;
  concepto: string;
}

// tslint:disable-next-line:class-name
export class _terminosDePago {
  id: number;
  proveedor: _proveedores;
  fechaDeFactura: Date;
  fechaDeRecepcion: Date;
  diasDeCredito: number;
}

// tslint:disable-next-line:class-name
export class _clientes {
  id: number;
  razonSocial: _razonSocial;
  nombre: string;
  rfc: string;
  moneda: _divisa;
  nombreDeContacto: string;
  correoElectronico: string;
  direccion: string;
  telefono: string;
  contactoDeCobranza: string;
  referencia: string;
  open?: boolean;
}

// tslint:disable-next-line:class-name
export class _terminosDeCobro {
  id: number;
  cliente: string;
  fechaDeFactura: Date;
  fechaDeRecepcion: Date;
  diasDeCredito: number;
  open?: boolean;
}

// tslint:disable-next-line:class-name
export class _traspasos {
  id: number;
  razonSocial: _razonSocial;
  bancoEmisor: string;
  monedaEmisor: _divisa;
  aliasEmisor: _cuentaBancaria;
  cuentaCargo: string;
  beneficiario: _razonSocial;
  bancoReceptor: string;
  monto: number; ///
  cuentaAbono: string;
  tipoTransaccion: string;
  concepto: string; ///
}

// tslint:disable-next-line:class-name
export class _pagoProveedores {
  id: number;
  razonSocial: _razonSocial; ///
  bancoCliente: string;
  monedaCliente: _divisa;
  alias?: _cuentaBancaria;
  cuentaCargo: string;
  beneficiario: _razonSocial;
  bancoProveedor: string;
  monto: number; ////
  cuentaAbono?: string;
  tipoTransaccion: string;
  convenio: string;
  concepto: string; ///
  referencia: string;
  estatus: string;
  area?: string;
  centroCostos?: string;
  servicios?: string;
}

// tslint:disable-next-line:class-name
export class _intercompanias {
  id: number;
  razonSocial: _razonSocial; //
  tipoDeOperacion: string;
  lineaDeCredito: _lineaDeCredito;
  monto: number; //
  fecha: Date;
  concepto: string; ///
  montoLinea: number;
  saldoInsoluto: number;
  montoDisponible: number;
}

// tslint:disable-next-line:class-name
export interface _inversiones {
  id: number;
  razonSocial: _razonSocial;
  banco: _bancos;
  alias: _cuentaBancaria;
  cuenta: string;
  monto: number;
  moneda: _divisa;
  tipo: string;
  retencion: number;
  tasa: number;
  interesesBrutos: number;
  inicio: Date;
  fin: Date;
  retencionValor: any;
  interesesNeto: any;
}

// tslint:disable-next-line:class-name
export interface _cheques {
  folio: string;
  razonSocial: _razonSocial;
  banco: string;
  cuenta: _cuentaBancaria;
  beneficiario: string;
  monto: number;
  concepto: string;
  fecha: Date;
  estado: string;
}

// tslint:disable-next-line:class-name
export interface  _autorizacionDePagos {
  folio: string;
  fechaCompromiso: Date;
  razonSocial: string;
  beneficiario: string;
  monto: number;
  operacion: string;
  fechaPago: Date;
  estatus: string;
}

// tslint:disable-next-line:class-name
export class _operacion {
  // campos generales
  operacion: string;
  folio: string;
  razonSocial: string;
  monto: string;
  fecha: string;
  estatus: string;
  concepto: string;

  // intercompanias
  tipoDeOperacion?: string;
  lineaDeCredito?: string;
  montoLinea?: string;
  saldoInsoluto?: string;
  montoDisponible?: string;

  // encomun traspasos y pago a proveedores
  cuentaCargo?: string;
  beneficiario?: string;
  cuentaAbono?: string;
  tipoTransaccion?: string;

  // proveedores
  bancoCliente?: string;
  monedaCliente?: string;
  alias?: string;
  bancoProveedor?: string;
  convenio?: string;
  referencia?: string;

  // traspasos
  bancoEmisor?: string;
  monedaEmisor?: string;
  aliasEmisor?: string;
  bancoReceptor?: string;
  aliasReceptor?: string;
}

// tslint:disable-next-line:class-name
export class _registroCobranza {
  id: number;
  razonSocial: _razonSocial;
  banco: _bancos;
  moneda: _divisa;
  alias: _cuentaBancaria;
  cuentaAbono: string;
  monto: number;
  cliente?: _razonSocial;
  bancoCliente?: _bancos;
  cuentaCargo?: _cuentaBancaria;
  tipoTransaccion: string;
  convenio: string;
  concepto: string;
  referencia: string;
  fecha: Date;
}

// tslint:disable-next-line:class-name
export class _flujoDeEfectivo {
  anio: number;
  tipoFE: string;
  mes: string;
  ingresos?: number;
  ingresosCobranza: number;
  ingresosOtros: number;
  egresos?: number;
  egresosProveedores: number;
  egresosSGA: number;
  egresosNomina: number;
  egresosImpuestos: number;
  egresosOtros: number;
  financiamiento?: number;
  financiamientoDisposiciones: number;
  financiamientoPagos: number;
  inversiones?: number;
  intereses: number;
  generacionCash?: number;
  saldoInicial: number;
  saldoFinal: number;
}

// tslint:disable-next-line:class-name
export class _tablaFE {
  ingresos: number;
  egresos: number;
  financiamiento: number;
  inversiones: number;
  generacionCash: number;
  saldoInicial: number;
  saldoFinal: number;
}

// tslint:disable-next-line:class-name
export class _requisiciones {
  id: number;
  razonSocial: _razonSocial;
  moneda: _bancos;
  area: string;
  centroCostos: string;
  proveedor: _proveedores;
  monto: number;
  servicio: string;
  fecha: Date;
}
// tslint:disable-next-line:class-name
export class _saldos {
  id: number;
  razonSocial: _razonSocial;
  banco: _bancos;
  cuenta: string;
  moneda: _divisa;
  alias: _cuentaBancaria;
  saldo: number;
}

// tslint:disable-next-line:class-name
export class _cuentasPorPagar {
  idProveedor: number;
  saldoTotal: number;
  saldoVigente: number;
  saldoVencido: number;
  unMesAtraso: number; // 1 -30 dias
  dosMesesAtraso: number; // 31 -60 dias
  tresMesesAtraso: number; // 61 90 dias
  seisMesesAtraso: number; // 91 - 180 dias
  anioAtraso: number; // 181 - 360 dias
  masAnioAtraso: number; // +361 dias
}

// tslint:disable-next-line:class-name
export class _cuentasPorCobrar {
  id: number;
  idCliente: string;
  saldoTotal: number;
  saldoVigente: number;
  saldoVencido: number;
  unMesAtraso: number; // 1 -30 dias
  dosMesesAtraso: number; // 31 -60 dias
  tresMesesAtraso: number; // 61 90 dias
  seisMesesAtraso: number; // 91 - 180 dias
  anioAtraso: number; // 181 - 360 dias
  masAnioAtraso: number; // +361 dias
}

// tslint:disable-next-line:class-name
export class _historicoPagos {
  folio: number;
  idProveedor: number;
  nombreProveedor: _proveedores;
  razonSocial: _razonSocial;
  tipoOperacion: string;
  moneda: _divisa;
  monto: number;
  fecha: Date;
  estatus: string;
}

// tslint:disable-next-line:class-name
export class _facturaManual {
  id: number;
  razonSocial: _razonSocial;
  moneda: _divisa;
  idCliente: _clientes;
  fechaEmision: Date;
  servicio: string;
  monto: number;
  iva: number;
  total: number;
}


// tslint:disable-next-line:class-name
export class _cartaConfirmacion {
  rfc: string;
  razonSocial: _razonSocial;
  fechaHora: Date;
  NoOperacion: string;
  llavePago: string;
  totalPagado: number;
  cuenta: _cuentaBancaria;
  confirmacion: string;
  folio: string;
  secuencia: string;
  usuarioCapturo: _usuario;
  fechaCaptura: Date;
  usuarioLibero: _usuario;
  fechaLiberacion: Date;
  claveRastreo: string;
}


// tslint:disable-next-line:class-name
export class _facturasXcobrar {
  id: number;
  razonSocial: _razonSocial;
  moneda: _divisa;
  cliente: _clientes;
  fechaEmision: Date;
  servicio: string;
  monto: number;
  iva: number;
  total: number;
}


// tslint:disable-next-line:class-name
export class _factura {
  id: number;
  razonSocial: _razonSocial;
  direccion: string;
  telefono: string;
  cliente: _clientes;
  clienteRazonSocial: _razonSocial;
  clienteDireccion: string;
  clienteTelefono: string;
  fecha: Date;
  estatus: string;
  servicio: string;
  moneda: _divisa;
  monto: number;
  iva: number;
  total: number;
}


// tslint:disable-next-line:class-name
export class _dashboard {
  flujoDeCajaMensual: _flujoCaja;
  cobranzaHistorica: _cobranzaHistorica;
  saldosBancarios: _saldosBancarios;
  metas: _metas;
}


// tslint:disable-next-line:class-name
export class _flujoDeCajaMensual {
  anio: number;
  tipoFE: string;
  mes: string;
  ingresos: number;
  ingresosCobranza: number;
  ingresosOtros: number;
  egresos: number;
  egresosProveedores: number;
  egresosSGA: number;
  egresosNomina: number;
  egresosImpuestos: number;
  egresosOtros: number;
  financiamiento: number;
  financiamientoDisposiciones: number;
  financiamientoPagos: number;
  inversiones: number;
  intereses: number;
  generacionCash: number;
  saldoInicial: number;
  saldoFinal: number;
}


// tslint:disable-next-line:class-name
export class _flujoCaja {
  presupuesto: _flujoDeCajaMensual;
  real: _flujoDeCajaMensual;
}
// tslint:disable-next-line:class-name
export class _cobranzaHistorica {
  mes: string;
  monto: number;
}
// tslint:disable-next-line:class-name
export class _saldosBancarios {
  banco: string;
  saldo: number;
}
// tslint:disable-next-line:class-name
export class _metas {
  meta: number;
  estado: number;
}

// tslint:disable-next-line:class-name
export class _formaLiquidacion {
  id: number;
  bancoCasa: _bancos;
  chequeraCasa: _cuentaBancaria;
  descripcion: string;
  divisa: _divisa;
  estatusAplicacion: string ;
  formaLiquidacion: string;
  montoMax: number;
  montoMin: number;
  multibanco: boolean;
  numeroCheque: boolean;
  pBanco: boolean;
  pBuscaConcentradora: boolean;
  pChequera: boolean;
  pDireccion: boolean;
  preguntaImpresion: string;
  tipoAplicacion: string;
  tipoImpresion: string;
  tipoMovimiento: string;
}

// tslint:disable-next-line:class-name
export  class _categorias {
  id: number;
  descripcion: string;
}

// tslint:disable-next-line:class-name
export class _subconceptos {
  id: number;
  subconcepto: string;
  descripcion: string;
  concepto: string;
  razonSocial: _razonSocial;
  divisa: _divisa;
  formaLiquidacion: _formaLiquidacion;
  categoria: _categorias;
}

// tslint:disable-next-line:class-name
export class _genLiq_ext_head {
  banco: _bancos;
  chequerasCasa: _cuentaBancaria;
  configuracion: string;
  habilitado: boolean;
  nombre: string;
  orden: number;
  subconcepto: _subconceptos;
  tipoArchivo: string;
  cargoAbono: string;
}

// tslint:disable-next-line:class-name
export class _recepcionFacturas {
  id: number;
  folio: string;
  fecha: string|Date;
  moneda: string;
  tipoDeCambio: string;
  emisorRfc: string;
  emisorNombre: string;
  receptorRfc: string;
  receptorNombre: string;
  valorUnitario: string;
  importe: string;
  totalImpuestosTrasladados: string;
  total: string;
  retencionIVA: string | number;
  retencionISR: string | number;
  estatus: string;

  idDocumento: string;
  razonSocial: string;
  nombreEmisor: string;
  iva: string|number;
  proveedor: string;
  idProveedor: string;
  fechaRecepcion: string|Date;
  factura: string;
  subconcepto: string;
  fechaLiquidacion: string|Date;
}

// tslint:disable-next-line:class-name
export class _parametros {
  portafolio: string;
  parametro: string;
  valor: string;
  subconceptoAbono?: string;
  subconceptoCargo?: string;
}

// tslint:disable-next-line:class-name
export class _genLiq_ext_det {
  campoLiq: string;
  genLiqExtHead: _genLiq_ext_head;
  operador: string;
  orden: number;
  valor: string;
}

// tslint:disable-next-line:class-name
export class _cargaExtractos {
  banco: any;
  cuenta: any;
  file: any;
}

// tslint:disable-next-line:class-name
export class tabla_regla {
  title: string;
  data: _genLiq_ext_det;
}

// tslint:disable-next-line:class-name
export class _errors {
  message: any;
  error: any;
  status: any;
}

// tslint:disable-next-line:class-name
export class _propuestaPagos {
  idDocumento: string;
  razonSocial: string;
  nombreProveedor: string;
  idproveedor: string;
  numFactura: string;
  importe: string|number;
  iva: string|number;
  retencionIVA: string|number;
  retencionISR: string|number;
  total: string|number;
}

// tslint:disable-next-line:class-name
export class _facturacion {
  serie: any;
  folio: any;
  fecha: Date;
  formaPago: any;
  noCertificado: any;
  condicionesDePago: any;
  subTotal: any;
  moneda: any;
  tipoCambio: any;
  total: any;
  tipoDeComprobante: any;
  metodoPago: any;
  lugarExpedicion: any;
  emisor: _razonSocial;
  receptor: _clientes;
  base: any;
  impuesto: any;
  tipoFactor: any;
  tasaOCuota: any;
  importe: any;
  descuento: any;
  concepto: _facturacionDetalle;
  Impuestos: _impuestos;
}

// tslint:disable-next-line:class-name
export class _facturacionTabla {
  id: number;
  emisor: string;
  receptor: string;
  fechaExpedicion: Date;
  estatus: string;
  total: number;
  cancelacion: boolean;
}

// tslint:disable-next-line:class-name
export class _facturacionDetalle {
  factura: any;
  claveProdServ: any;
  noIdentificacion: any;
  cantidad: any;
  claveUnidad: any;
  unidad: any;
  descripcion: any;
  valorUnitario: any;
  importe: any;
  descuentoPorcentaje?: any;
  descuento: any;
  base: any;
  impuesto: any;
  tipoFactor: any;
  tasaOCuota: any;
  importeTraslados: any;
}

// tslint:disable-next-line:class-name
export class _facturaJSON {
  comprobante: _facturacion;
  camposPDF: _camposPDF;
  logo: any;
}

// tslint:disable-next-line:class-name
export class _camposPDF {
  tipoComprobante: string;
  Comentarios: string;
  calleEmisor: string;
  noExteriorEmisor: string;
  noInteriorEmisor: string;
  coloniaEmisor: string;
  codigoPostalEmisor: string;
  localidadEmisor: string;
  municipioEmisor: string;
  estadoEmisor: string;
  paisEmisor: string;
  telefonoEmisor: string;
  emailEmisor: string;
  calleReceptor: string;
  noExteriorReceptor: string;
  noInteriorReceptor: string;
  coloniaReceptor: string;
  codigoPostalReceptor: string;
  localidadReceptor: string;
  municipioReceptor: string;
  estadoReceptor: string;
  paisReceptor: string;
}

// tslint:disable-next-line:class-name
export class _impuestos {
  TotalImpuestosTrasladados: any;
}

// tslint:disable-next-line:class-name
export class _facturaXpagar {
  proveedor: string;
  receptor: string;
  folio: number;
  montoTotal: string;
  fechaVencimiento: Date;
  estatus: string;
  saldo: number;
}

// tslint:disable-next-line:class-name
export class _facturaXcobrar {
  cliente: string;
  emisor: string;
  folio: number;
  montoTotal: string;
  fechaVencimiento: Date;
  estatus: string;
  saldo: number;
}

// tslint:disable-next-line:class-name
export class _importaciones {
  id: number;
  cuenta: string;
  fecha: Date;
  montoAbono: number;
  montoCargo: number;
  tipoMovimiento: string;
  referencia: string;
}

// tslint:disable-next-line:class-name
export class _conciliacionOperacionesCargos {
  folio: number;
  receptor: string;
  factura: number | string;
  monto: number;
  operacion: string;
  fechaDePago: string;
  conciliado: boolean;
  estatus: string;
}

// tslint:disable-next-line:class-name
export class _conciliacion {
  montoXoperaciones: number;
  montoXmovimientos: number;
  diferencia: number;
  descripcionDiferencia: string;
}
// tslint:disable-next-line:class-name
export class _conciliacionDetalle {
  conciliacion: _conciliacion;
  movimiento: number;
  folioOperacion: number;
  tipoOperacion: string
}

// tslint:disable-next-line:class-name
export class _conciliacionOperacionesAbonos {
  folio: number;
  emisor: string;
  factura: number | string;
  monto: number;
  operacion: string;
  fechaDePago: string;
  conciliado: boolean;
  estatus: string;
}
// tslint:disable-next-line:class-name
export class _conciliacionMovimientos {
  id: number;
  cuenta: string;
  monto: number;
  fecha: string;
  divisa: string;
  referencia: string;
  conciliado: boolean;
  estatus: string;
}

// tslint:disable-next-line:class-name
export class _statusConciliacion {
  conciliadas: number;
  pendientes: number;
  total: number;
}

// tslint:disable-next-line:class-name
export class _operacionConciliada {
  folio: string;
  emisor: string;
  factura: string;
  monto: number;
  operacion: string;
  fechaDePago: string;
  conciliado: string;
  fechaConciliacion: string;
  montoOperaciones: string;
  montoMovimientos: string;
  saldo: number;
  descripcion: string;
}

// tslint:disable-next-line:class-name
export class _moimientoConciliada {
  id: string;
  cuenta: string;
  monto: number;
  fecha: string;
  divisa: string;
  referencia: string;
  cargoAbono: string;
  conciliado: string;
  fechaConciliacion: string;
  montoOperaciones: string;
  montoMovimientos: string;
  saldo: string;
  descripcion: string;
}

// tslint:disable-next-line:class-name
export class _eliminacionConciliacion {
  conciliacion: number;
  detalles: _eliminacionConciliacionDetalles[];
}

// tslint:disable-next-line:class-name
export  class _eliminacionConciliacionDetalles {
  id: number;
}

// tslint:disable-next-line:class-name
export class _Port {
  public id: number;
  public name: string;
}
