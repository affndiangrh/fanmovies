"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/movies";
exports.ids = ["pages/api/movies"];
exports.modules = {

/***/ "(api)/./pages/api/movies.ts":
/*!*****************************!*\
  !*** ./pages/api/movies.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"(api)/./utils/index.ts\");\n// Utils\n\nasync function handler(req, res) {\n    const { page , search  } = req.query; // grab search params\n    const endpoint = search ? `${_utils__WEBPACK_IMPORTED_MODULE_0__.SEARCH_BASE_URL}${search}&page=${page}` : `${_utils__WEBPACK_IMPORTED_MODULE_0__.POPULAR_BASE_URL}&page=${page}`;\n    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.basicFetch)(endpoint);\n    res.status(200).json(data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW92aWVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsUUFBUTtBQUMrRDtBQUt4RCxlQUFlRyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBNEIsRUFDNUI7SUFDQSxNQUFNLEVBQUVDLElBQUksR0FBRUMsTUFBTSxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksS0FBSyxFQUFFLHFCQUFxQjtJQUV6RCxNQUFNQyxRQUFRLEdBQUdGLE1BQU0sR0FDbkIsQ0FBQyxFQUFFTCxtREFBZSxDQUFDLEVBQUVLLE1BQU0sQ0FBQyxNQUFNLEVBQUVELElBQUksQ0FBQyxDQUFDLEdBQzFDLENBQUMsRUFBRUwsb0RBQWdCLENBQUMsTUFBTSxFQUFFSyxJQUFJLENBQUMsQ0FBQztJQUV0QyxNQUFNSSxJQUFJLEdBQUcsTUFBTVYsa0RBQVUsQ0FBU1MsUUFBUSxDQUFDO0lBRS9DSixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsQ0FBQztDQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllLXRtZGIvLi9wYWdlcy9hcGkvbW92aWVzLnRzP2E2NWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVXRpbHNcbmltcG9ydCB7IGJhc2ljRmV0Y2gsIFBPUFVMQVJfQkFTRV9VUkwsIFNFQVJDSF9CQVNFX1VSTCB9IGZyb20gJ0B1dGlscyc7XG4vLyBUeXBlc1xuaW1wb3J0IHR5cGUgeyBNb3ZpZXMgfSBmcm9tICdAdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPE1vdmllcz5cbikge1xuICBjb25zdCB7IHBhZ2UsIHNlYXJjaCB9ID0gcmVxLnF1ZXJ5OyAvLyBncmFiIHNlYXJjaCBwYXJhbXNcblxuICBjb25zdCBlbmRwb2ludCA9IHNlYXJjaFxuICAgID8gYCR7U0VBUkNIX0JBU0VfVVJMfSR7c2VhcmNofSZwYWdlPSR7cGFnZX1gXG4gICAgOiBgJHtQT1BVTEFSX0JBU0VfVVJMfSZwYWdlPSR7cGFnZX1gO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBiYXNpY0ZldGNoPE1vdmllcz4oZW5kcG9pbnQpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xufVxuIl0sIm5hbWVzIjpbImJhc2ljRmV0Y2giLCJQT1BVTEFSX0JBU0VfVVJMIiwiU0VBUkNIX0JBU0VfVVJMIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBhZ2UiLCJzZWFyY2giLCJxdWVyeSIsImVuZHBvaW50IiwiZGF0YSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/movies.ts\n");

/***/ }),

/***/ "(api)/./utils/basicFetch.ts":
/*!*****************************!*\
  !*** ./utils/basicFetch.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basicFetch\": () => (/* binding */ basicFetch)\n/* harmony export */ });\nconst basicFetch = async (endpoint)=>{\n    const response = await fetch(endpoint);\n    if (!response.ok) throw new Error(\"Error!\");\n    const data = await response.json();\n    return data;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9iYXNpY0ZldGNoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxVQUFVLEdBQUcsT0FDeEJDLFFBQWdCLEdBQ1E7SUFDeEIsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsUUFBUSxDQUFDO0lBRXRDLElBQUksQ0FBQ0MsUUFBUSxDQUFDRSxFQUFFLEVBQUUsTUFBTSxJQUFJQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFNUMsTUFBTUMsSUFBSSxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBSSxFQUFFO0lBRWxDLE9BQU9ELElBQUksQ0FBQztDQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZS10bWRiLy4vdXRpbHMvYmFzaWNGZXRjaC50cz9lY2JiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBiYXNpY0ZldGNoID0gYXN5bmMgPHJldHVyblR5cGU+KFxuICBlbmRwb2ludDogc3RyaW5nXG4pOiBQcm9taXNlPHJldHVyblR5cGU+ID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdFcnJvciEnKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiJdLCJuYW1lcyI6WyJiYXNpY0ZldGNoIiwiZW5kcG9pbnQiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/basicFetch.ts\n");

/***/ }),

/***/ "(api)/./utils/config.ts":
/*!*************************!*\
  !*** ./utils/config.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_KEY\": () => (/* binding */ API_KEY),\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"BACKDROP_SIZE\": () => (/* binding */ BACKDROP_SIZE),\n/* harmony export */   \"IMAGE_BASE_URL\": () => (/* binding */ IMAGE_BASE_URL),\n/* harmony export */   \"POPULAR_BASE_URL\": () => (/* binding */ POPULAR_BASE_URL),\n/* harmony export */   \"POSTER_SIZE\": () => (/* binding */ POSTER_SIZE),\n/* harmony export */   \"SEARCH_BASE_URL\": () => (/* binding */ SEARCH_BASE_URL),\n/* harmony export */   \"creditsUrl\": () => (/* binding */ creditsUrl),\n/* harmony export */   \"movieUrl\": () => (/* binding */ movieUrl)\n/* harmony export */ });\n// Configuration for TMDB API\n// Read more about the API here: https://developers.themoviedb.org/\nconst API_URL = \"https://api.themoviedb.org/3/\";\nconst API_KEY = process.env.API_KEY;\nconst SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;\nconst POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;\n// For single movie\nconst movieUrl = (id)=>`${API_URL}movie/${id}?api_key=${API_KEY}`;\nconst creditsUrl = (id)=>`${API_URL}movie/${id}/credits?api_key=${API_KEY}`;\nconst IMAGE_BASE_URL = \"http://image.tmdb.org/t/p/\";\n// Sizes: w300, w780, w1280, original\nconst BACKDROP_SIZE = \"w1280\";\n// w92, w154, w185, w342, w500, w780, original\nconst POSTER_SIZE = \"w780\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25maWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQTZCO0FBQzdCLG1FQUFtRTtBQUU1RCxNQUFNQSxPQUFPLEdBQVcsK0JBQStCLENBQUM7QUFDeEQsTUFBTUMsT0FBTyxHQUF1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQztBQUV4RCxNQUFNRyxlQUFlLEdBQVcsQ0FBQyxFQUFFSixPQUFPLENBQUMscUJBQXFCLEVBQUVDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ2xHLE1BQU1JLGdCQUFnQixHQUFXLENBQUMsRUFBRUwsT0FBTyxDQUFDLHNCQUFzQixFQUFFQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDcEcsbUJBQW1CO0FBQ1osTUFBTUssUUFBUSxHQUFHLENBQUNDLEVBQVcsR0FBSyxDQUFDLEVBQUVQLE9BQU8sQ0FBQyxNQUFNLEVBQUVPLEVBQUUsQ0FBQyxTQUFTLEVBQUVOLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDN0UsTUFBTU8sVUFBVSxHQUFHLENBQUNELEVBQVcsR0FBSyxDQUFDLEVBQUVQLE9BQU8sQ0FBQyxNQUFNLEVBQUVPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRU4sT0FBTyxDQUFDLENBQUMsQ0FBQztBQUV2RixNQUFNUSxjQUFjLEdBQVcsNEJBQTRCLENBQUM7QUFDbkUscUNBQXFDO0FBQzlCLE1BQU1DLGFBQWEsR0FBVyxPQUFPLENBQUM7QUFDN0MsOENBQThDO0FBQ3ZDLE1BQU1DLFdBQVcsR0FBVyxNQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZS10bWRiLy4vdXRpbHMvY29uZmlnLnRzPzBiMWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29uZmlndXJhdGlvbiBmb3IgVE1EQiBBUElcbi8vIFJlYWQgbW9yZSBhYm91dCB0aGUgQVBJIGhlcmU6IGh0dHBzOi8vZGV2ZWxvcGVycy50aGVtb3ZpZWRiLm9yZy9cblxuZXhwb3J0IGNvbnN0IEFQSV9VUkw6IHN0cmluZyA9ICdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zLyc7XG5leHBvcnQgY29uc3QgQVBJX0tFWTogc3RyaW5nIHwgdW5kZWZpbmVkID0gcHJvY2Vzcy5lbnYuQVBJX0tFWTtcblxuZXhwb3J0IGNvbnN0IFNFQVJDSF9CQVNFX1VSTDogc3RyaW5nID0gYCR7QVBJX1VSTH1zZWFyY2gvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9Jmxhbmd1YWdlPWVuLVVTJnF1ZXJ5PWA7XG5leHBvcnQgY29uc3QgUE9QVUxBUl9CQVNFX1VSTDogc3RyaW5nID0gYCR7QVBJX1VSTH1tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9JHtBUElfS0VZfSZsYW5ndWFnZT1lbi1VU2A7XG4vLyBGb3Igc2luZ2xlIG1vdmllXG5leHBvcnQgY29uc3QgbW92aWVVcmwgPSAoaWQ/OiBzdHJpbmcpID0+IGAke0FQSV9VUkx9bW92aWUvJHtpZH0/YXBpX2tleT0ke0FQSV9LRVl9YDtcbmV4cG9ydCBjb25zdCBjcmVkaXRzVXJsID0gKGlkPzogc3RyaW5nKSA9PiBgJHtBUElfVVJMfW1vdmllLyR7aWR9L2NyZWRpdHM/YXBpX2tleT0ke0FQSV9LRVl9YDtcblxuZXhwb3J0IGNvbnN0IElNQUdFX0JBU0VfVVJMOiBzdHJpbmcgPSAnaHR0cDovL2ltYWdlLnRtZGIub3JnL3QvcC8nO1xuLy8gU2l6ZXM6IHczMDAsIHc3ODAsIHcxMjgwLCBvcmlnaW5hbFxuZXhwb3J0IGNvbnN0IEJBQ0tEUk9QX1NJWkU6IHN0cmluZyA9ICd3MTI4MCc7XG4vLyB3OTIsIHcxNTQsIHcxODUsIHczNDIsIHc1MDAsIHc3ODAsIG9yaWdpbmFsXG5leHBvcnQgY29uc3QgUE9TVEVSX1NJWkU6IHN0cmluZyA9ICd3NzgwJztcblxuIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJBUElfS0VZIiwicHJvY2VzcyIsImVudiIsIlNFQVJDSF9CQVNFX1VSTCIsIlBPUFVMQVJfQkFTRV9VUkwiLCJtb3ZpZVVybCIsImlkIiwiY3JlZGl0c1VybCIsIklNQUdFX0JBU0VfVVJMIiwiQkFDS0RST1BfU0laRSIsIlBPU1RFUl9TSVpFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/config.ts\n");

/***/ }),

/***/ "(api)/./utils/fetchMovies.ts":
/*!******************************!*\
  !*** ./utils/fetchMovies.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchMovies\": () => (/* binding */ fetchMovies)\n/* harmony export */ });\n/* harmony import */ var _basicFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicFetch */ \"(api)/./utils/basicFetch.ts\");\n\nconst fetchMovies = async (search = \"\", page = 1)=>{\n    return await (0,_basicFetch__WEBPACK_IMPORTED_MODULE_0__.basicFetch)(`/api/movies?search=${search}&page=${page}`);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9mZXRjaE1vdmllcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUMwQztBQUVuQyxNQUFNQyxXQUFXLEdBQUcsT0FBT0MsTUFBTSxHQUFHLEVBQUUsRUFBRUMsSUFBSSxHQUFHLENBQUMsR0FBc0I7SUFDM0UsT0FBTyxNQUFNSCx1REFBVSxDQUFTLENBQUMsbUJBQW1CLEVBQUVFLE1BQU0sQ0FBQyxNQUFNLEVBQUVDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM5RSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aWUtdG1kYi8uL3V0aWxzL2ZldGNoTW92aWVzLnRzPzIwMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW92aWVzIH0gZnJvbSAnQHR5cGVzJztcbmltcG9ydCB7IGJhc2ljRmV0Y2ggfSBmcm9tICcuL2Jhc2ljRmV0Y2gnO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hNb3ZpZXMgPSBhc3luYyAoc2VhcmNoID0gJycsIHBhZ2UgPSAxKTogUHJvbWlzZTxNb3ZpZXM+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGJhc2ljRmV0Y2g8TW92aWVzPihgL2FwaS9tb3ZpZXM/c2VhcmNoPSR7c2VhcmNofSZwYWdlPSR7cGFnZX1gKTtcbn07XG4iXSwibmFtZXMiOlsiYmFzaWNGZXRjaCIsImZldGNoTW92aWVzIiwic2VhcmNoIiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/fetchMovies.ts\n");

/***/ }),

/***/ "(api)/./utils/helpers.ts":
/*!**************************!*\
  !*** ./utils/helpers.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calcTime\": () => (/* binding */ calcTime),\n/* harmony export */   \"convertMoney\": () => (/* binding */ convertMoney)\n/* harmony export */ });\n// Convert time to hours and minutes\nconst calcTime = (time)=>{\n    const hours = Math.floor(time / 60);\n    const mins = time % 60;\n    return `${hours}h ${mins}m`;\n};\n// Convert a number to money formatting\nconst convertMoney = (money)=>{\n    const formatter = new Intl.NumberFormat(\"en-US\", {\n        style: \"currency\",\n        currency: \"USD\",\n        minimumFractionDigits: 0\n    });\n    return formatter.format(money);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9oZWxwZXJzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0NBQW9DO0FBQzdCLE1BQU1BLFFBQVEsR0FBRyxDQUFDQyxJQUFZLEdBQWE7SUFDaEQsTUFBTUMsS0FBSyxHQUFXQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUMzQyxNQUFNSSxJQUFJLEdBQVdKLElBQUksR0FBRyxFQUFFO0lBQzlCLE9BQU8sQ0FBQyxFQUFFQyxLQUFLLENBQUMsRUFBRSxFQUFFRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDN0IsQ0FBQztBQUVGLHVDQUF1QztBQUNoQyxNQUFNQyxZQUFZLEdBQUcsQ0FBQ0MsS0FBYSxHQUFhO0lBQ3JELE1BQU1DLFNBQVMsR0FBc0IsSUFBSUMsSUFBSSxDQUFDQyxZQUFZLENBQUMsT0FBTyxFQUFFO1FBQ2xFQyxLQUFLLEVBQUUsVUFBVTtRQUNqQkMsUUFBUSxFQUFFLEtBQUs7UUFDZkMscUJBQXFCLEVBQUUsQ0FBQztLQUN6QixDQUFDO0lBQ0YsT0FBT0wsU0FBUyxDQUFDTSxNQUFNLENBQUNQLEtBQUssQ0FBQyxDQUFDO0NBQ2hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZS10bWRiLy4vdXRpbHMvaGVscGVycy50cz9kMmIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvbnZlcnQgdGltZSB0byBob3VycyBhbmQgbWludXRlc1xuZXhwb3J0IGNvbnN0IGNhbGNUaW1lID0gKHRpbWU6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGhvdXJzOiBudW1iZXIgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG4gIGNvbnN0IG1pbnM6IG51bWJlciA9IHRpbWUgJSA2MDtcbiAgcmV0dXJuIGAke2hvdXJzfWggJHttaW5zfW1gO1xufTtcblxuLy8gQ29udmVydCBhIG51bWJlciB0byBtb25leSBmb3JtYXR0aW5nXG5leHBvcnQgY29uc3QgY29udmVydE1vbmV5ID0gKG1vbmV5OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBmb3JtYXR0ZXI6IEludGwuTnVtYmVyRm9ybWF0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLFxuICB9KTtcbiAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQobW9uZXkpO1xufTtcbiJdLCJuYW1lcyI6WyJjYWxjVGltZSIsInRpbWUiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnMiLCJjb252ZXJ0TW9uZXkiLCJtb25leSIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/helpers.ts\n");

/***/ }),

/***/ "(api)/./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _basicFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicFetch */ \"(api)/./utils/basicFetch.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _basicFetch__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _basicFetch__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"(api)/./utils/config.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _config__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _config__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _fetchMovies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchMovies */ \"(api)/./utils/fetchMovies.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _fetchMovies__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _fetchMovies__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ \"(api)/./utils/helpers.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _helpers__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _helpers__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNKO0FBQ0s7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllLXRtZGIvLi91dGlscy9pbmRleC50cz81NmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYmFzaWNGZXRjaCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL2ZldGNoTW92aWVzJztcbmV4cG9ydCAqIGZyb20gJy4vaGVscGVycyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/movies.ts"));
module.exports = __webpack_exports__;

})();