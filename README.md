# MDPC-PRODUCT-CARD

Este es un paquete de pruebas de despliegue en NPM

### Juan Escudero

## Ejemplo

````
import { Card, Title } from '../dist/components/index';

````

```
<Card>
  {
    (args) => (
      <>
        <Title className={'text--title'} title={'Juan Escudero'} />
        <span>{JSON.stringify(args.count)}</span>
      </>
    )
  }
</Card>

```