# reactjs-redux

To implement redux-toolkit:
1. Install packages like @redux/toolkit and react-redux

2. Create store and slices using configureStore and createSlice function respectively

3. In slice, name, initalState , reducers and actions are created, then for async operation like fetching thunks is created.

4. To connect the redux , use Provider component and to store add use useDispatch hook and to reterive use useSelector hook

5. Note to call function from redux , dipatch(function_name) should be done.

# Higher order component

Component taking another component as a argument 

# Error Boundary and Suspense and Lazy Loading

1. Install package react-error-boundary. For handling error of components- <ErrorBoundary>

2. If component takes time to load- <Suspense>

3. const Component = lazy(()=>import("path/to/component))

# Memoization

1. React.memo()--> memoizes component

2. useCallback()--> memoizes function




