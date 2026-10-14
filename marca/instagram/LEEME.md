# Instagram — Cala Studio

Kit de arranque con la misma identidad que la web. Todas las imágenes están en `piezas/`.
Para regenerarlas tras cambiar textos: `npm run build` y después `node marca/instagram/generar.mjs`.

---

## 1. Perfil

| Campo | Texto |
|---|---|
| Usuario | `@thecalastudio` (o `@calastudio` si está libre) |
| Nombre | `Cala Studio · Marketing` *(máx. 30 caracteres; sale en las búsquedas)* |
| Categoría | Agencia de marketing |
| Enlace | `https://thecalastudio.com/contacto` |
| Botón de contacto | Email → `hola@thecalastudio.com` |

**Biografía** (143 de 150 caracteres, copia y pega tal cual):

```
Marketing con cabeza.
Estrategia, contenido, publicidad, web y tecnología para marcas que quieren hacer las cosas bien.
↓ Cuéntanos tu proyecto
```

**Foto de perfil:** `01-perfil-oscuro.png` (recomendada; destaca más en el círculo).
Alternativa clara: `01-perfil-claro.png`.

---

## 2. Historias destacadas

Sube cada portada como historia, crea la destacada con ese nombre y usa la imagen como portada.

| Nombre | Portada | Qué guardar dentro |
|---|---|---|
| Servicios | `destacada-1-servicios.png` | Una historia por servicio |
| Proyectos | `destacada-2-proyectos.png` | Antes/después, resultados |
| Método | `destacada-3-metodo.png` | Entender · Ordenar · Crear · Medir |
| Nosotros | `destacada-4-nosotros.png` | Equipo, forma de trabajar |
| Contacto | `destacada-5-contacto.png` | Cómo escribirnos, enlace a la web |

### Historias para dentro de cada destacada (1080×1920)

Súbelas en este orden y añádelas a su destacada. Todo el texto importante queda dentro de la zona segura (no lo tapan la barra de arriba ni la caja de respuesta).

| Destacada | Historias (en orden) |
|---|---|
| Servicios | `historia-servicios-00-portada.png` → `01-estrategia` → `02-redes-sociales` → `03-publicidad-digital` → `04-web-landing-pages` → `05-branding-creatividad` → `06-automatizacion-ia` → `07-bodas` (Cala Weddings) |
| Método | `historia-metodo.png` |
| Nosotros | `historia-nosotros.png` |
| Contacto | `historia-contacto.png` → añade una **pegatina de enlace** a `thecalastudio.com/contacto` y otra de **email** si quieres |

Consejo: en las de servicios, pon una pegatina de enlace a `thecalastudio.com/servicios` (o `/bodas` en la de Cala Weddings) en el hueco bajo la caja negra.
Para regenerar solo las historias: `node marca/instagram/generar.mjs historia-`.

Historia de estreno: `historia-lanzamiento.png` → añade una **pegatina de enlace** a `thecalastudio.com`.

---

## 3. Primeras publicaciones

Instagram muestra primero la última que subes. **Publícalas en este orden: 6 → 5 → 4 → 3 → 2 → 1**
para que en el perfil queden así:

```
[1 Marketing con cabeza] [2 Menos humo]   [3 Servicios]
[4 Método]               [5 Diferencia]   [6 Contacto]
```

Formato **3:4 (1080×1440)**, el que usa ahora la cuadrícula del perfil: se ven enteras, sin recortes.
Al subirlas, pulsa el icono de recorte y elige **original** (no el cuadrado).

### Post 6 · `post-6-contacto.png` (se publica primero)

```
¿Tienes algo entre manos?

Cuéntanos qué estás montando, qué quieres mejorar o qué no termina de funcionar. Te respondemos y, si tiene sentido, te enviamos una propuesta clara.

Enlace en la bio · hola@thecalastudio.com

#marketingdigital #agenciademarketing #pymes #estrategiadigital #calastudio
```

### Post 5 · `post-5-diferencia.png`

```
No necesitas hacer más marketing. Necesitas saber qué marketing merece la pena hacer.

De todo lo que se podría hacer, solo una parte mueve el negocio. Nuestro trabajo empieza por encontrarla.

#marketingdigital #estrategia #pymes #calastudio
```

### Post 4 · `post-4-metodo.png`

```
Cuatro pasos. Siempre en este orden.

01 Entender — el negocio, el producto, el cliente y qué está pasando realmente.
02 Ordenar — prioridades, estrategia, canales y objetivos.
03 Crear — campañas, contenido, diseño y acciones concretas.
04 Medir — qué funciona, qué no y dónde merece la pena invertir.

Y vuelta a empezar.

#metodologia #marketingdigital #estrategiadigital #calastudio
```

### Post 3 · `post-3-servicios.png`

```
Lo que hacemos, sin rodeos.

Estrategia · Redes sociales · Publicidad digital (Meta y Google Ads) · Web y landing pages · Branding y creatividad · Automatización e IA

Puedes contratar algo concreto o dejarnos todo el marketing. En los dos casos, con un plan detrás.

#agenciademarketing #redessociales #metaads #googleads #calastudio
```

### Post 2 · `post-2-menos-humo.png`

```
Menos humo. Más criterio.

No creemos en publicar por publicar, invertir por invertir ni usar herramientas porque estén de moda.

Primero entendemos el negocio. Después decidimos qué merece la pena hacer.

#marketingdigital #estrategia #emprendedores #calastudio
```

### Post 1 · `post-1-marketing-con-cabeza.png` (se publica el último)

```
Marketing con cabeza. Creatividad con intención.

Somos Cala Studio: estrategia, contenido, publicidad, web y tecnología para marcas que quieren hacer las cosas bien.

Ya tenemos web → thecalastudio.com

#marketingdigital #agenciademarketing #pymes #calastudio
```

---

## Consejos rápidos

- Publica las 6 el mismo día (o una al día durante una semana) para que el perfil no se vea vacío.
- Fija en el perfil (📌) el post 1 y el post 6.
- Mantén pocos hashtags (4–5) y siempre `#calastudio`.
- Colores: aguamarina `#42DCC6`, aguamarina oscuro `#159C8E`, crema `#F8F7F2`, negro `#171717`.
- Tipografías: Bricolage Grotesque (titulares), Instrument Sans (texto), Instrument Serif cursiva (palabras destacadas). Todas gratuitas en Google Fonts.
