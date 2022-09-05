import { FormProvider } from "./contexts/FromContext"
import { AppRouter } from "./router"




function App() {
    return (
        <FormProvider>
            <AppRouter />
        </FormProvider>
    )
}

export default App
