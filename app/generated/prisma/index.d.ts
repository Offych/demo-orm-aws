
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model APIKEY
 * 
 */
export type APIKEY = $Result.DefaultSelection<Prisma.$APIKEYPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more APIKEYS
 * const aPIKEYS = await prisma.aPIKEY.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more APIKEYS
   * const aPIKEYS = await prisma.aPIKEY.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.aPIKEY`: Exposes CRUD operations for the **APIKEY** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more APIKEYS
    * const aPIKEYS = await prisma.aPIKEY.findMany()
    * ```
    */
  get aPIKEY(): Prisma.APIKEYDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    APIKEY: 'APIKEY'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "aPIKEY"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      APIKEY: {
        payload: Prisma.$APIKEYPayload<ExtArgs>
        fields: Prisma.APIKEYFieldRefs
        operations: {
          findUnique: {
            args: Prisma.APIKEYFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKEYPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.APIKEYFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKEYPayload>
          }
          findFirst: {
            args: Prisma.APIKEYFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKEYPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.APIKEYFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKEYPayload>
          }
          findMany: {
            args: Prisma.APIKEYFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKEYPayload>[]
          }
          create: {
            args: Prisma.APIKEYCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKEYPayload>
          }
          createMany: {
            args: Prisma.APIKEYCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.APIKEYCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKEYPayload>[]
          }
          delete: {
            args: Prisma.APIKEYDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKEYPayload>
          }
          update: {
            args: Prisma.APIKEYUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKEYPayload>
          }
          deleteMany: {
            args: Prisma.APIKEYDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.APIKEYUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.APIKEYUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKEYPayload>[]
          }
          upsert: {
            args: Prisma.APIKEYUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$APIKEYPayload>
          }
          aggregate: {
            args: Prisma.APIKEYAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAPIKEY>
          }
          groupBy: {
            args: Prisma.APIKEYGroupByArgs<ExtArgs>
            result: $Utils.Optional<APIKEYGroupByOutputType>[]
          }
          count: {
            args: Prisma.APIKEYCountArgs<ExtArgs>
            result: $Utils.Optional<APIKEYCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    aPIKEY?: APIKEYOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model APIKEY
   */

  export type AggregateAPIKEY = {
    _count: APIKEYCountAggregateOutputType | null
    _min: APIKEYMinAggregateOutputType | null
    _max: APIKEYMaxAggregateOutputType | null
  }

  export type APIKEYMinAggregateOutputType = {
    id: string | null
    apiKey: string | null
    apiSecret: string | null
    environment: string | null
    project: string | null
    team: string | null
    provider: string | null
    modelType: string | null
    reminderToUpgrade: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type APIKEYMaxAggregateOutputType = {
    id: string | null
    apiKey: string | null
    apiSecret: string | null
    environment: string | null
    project: string | null
    team: string | null
    provider: string | null
    modelType: string | null
    reminderToUpgrade: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type APIKEYCountAggregateOutputType = {
    id: number
    apiKey: number
    apiSecret: number
    environment: number
    project: number
    team: number
    provider: number
    modelType: number
    reminderToUpgrade: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type APIKEYMinAggregateInputType = {
    id?: true
    apiKey?: true
    apiSecret?: true
    environment?: true
    project?: true
    team?: true
    provider?: true
    modelType?: true
    reminderToUpgrade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type APIKEYMaxAggregateInputType = {
    id?: true
    apiKey?: true
    apiSecret?: true
    environment?: true
    project?: true
    team?: true
    provider?: true
    modelType?: true
    reminderToUpgrade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type APIKEYCountAggregateInputType = {
    id?: true
    apiKey?: true
    apiSecret?: true
    environment?: true
    project?: true
    team?: true
    provider?: true
    modelType?: true
    reminderToUpgrade?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type APIKEYAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which APIKEY to aggregate.
     */
    where?: APIKEYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKEYS to fetch.
     */
    orderBy?: APIKEYOrderByWithRelationInput | APIKEYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: APIKEYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKEYS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKEYS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned APIKEYS
    **/
    _count?: true | APIKEYCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: APIKEYMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: APIKEYMaxAggregateInputType
  }

  export type GetAPIKEYAggregateType<T extends APIKEYAggregateArgs> = {
        [P in keyof T & keyof AggregateAPIKEY]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAPIKEY[P]>
      : GetScalarType<T[P], AggregateAPIKEY[P]>
  }




  export type APIKEYGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: APIKEYWhereInput
    orderBy?: APIKEYOrderByWithAggregationInput | APIKEYOrderByWithAggregationInput[]
    by: APIKEYScalarFieldEnum[] | APIKEYScalarFieldEnum
    having?: APIKEYScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: APIKEYCountAggregateInputType | true
    _min?: APIKEYMinAggregateInputType
    _max?: APIKEYMaxAggregateInputType
  }

  export type APIKEYGroupByOutputType = {
    id: string
    apiKey: string
    apiSecret: string
    environment: string
    project: string
    team: string
    provider: string
    modelType: string
    reminderToUpgrade: boolean
    createdAt: Date
    updatedAt: Date
    _count: APIKEYCountAggregateOutputType | null
    _min: APIKEYMinAggregateOutputType | null
    _max: APIKEYMaxAggregateOutputType | null
  }

  type GetAPIKEYGroupByPayload<T extends APIKEYGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<APIKEYGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof APIKEYGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], APIKEYGroupByOutputType[P]>
            : GetScalarType<T[P], APIKEYGroupByOutputType[P]>
        }
      >
    >


  export type APIKEYSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKey?: boolean
    apiSecret?: boolean
    environment?: boolean
    project?: boolean
    team?: boolean
    provider?: boolean
    modelType?: boolean
    reminderToUpgrade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aPIKEY"]>

  export type APIKEYSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKey?: boolean
    apiSecret?: boolean
    environment?: boolean
    project?: boolean
    team?: boolean
    provider?: boolean
    modelType?: boolean
    reminderToUpgrade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aPIKEY"]>

  export type APIKEYSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKey?: boolean
    apiSecret?: boolean
    environment?: boolean
    project?: boolean
    team?: boolean
    provider?: boolean
    modelType?: boolean
    reminderToUpgrade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aPIKEY"]>

  export type APIKEYSelectScalar = {
    id?: boolean
    apiKey?: boolean
    apiSecret?: boolean
    environment?: boolean
    project?: boolean
    team?: boolean
    provider?: boolean
    modelType?: boolean
    reminderToUpgrade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type APIKEYOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiKey" | "apiSecret" | "environment" | "project" | "team" | "provider" | "modelType" | "reminderToUpgrade" | "createdAt" | "updatedAt", ExtArgs["result"]["aPIKEY"]>

  export type $APIKEYPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "APIKEY"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiKey: string
      apiSecret: string
      environment: string
      project: string
      team: string
      provider: string
      modelType: string
      reminderToUpgrade: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aPIKEY"]>
    composites: {}
  }

  type APIKEYGetPayload<S extends boolean | null | undefined | APIKEYDefaultArgs> = $Result.GetResult<Prisma.$APIKEYPayload, S>

  type APIKEYCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<APIKEYFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: APIKEYCountAggregateInputType | true
    }

  export interface APIKEYDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['APIKEY'], meta: { name: 'APIKEY' } }
    /**
     * Find zero or one APIKEY that matches the filter.
     * @param {APIKEYFindUniqueArgs} args - Arguments to find a APIKEY
     * @example
     * // Get one APIKEY
     * const aPIKEY = await prisma.aPIKEY.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends APIKEYFindUniqueArgs>(args: SelectSubset<T, APIKEYFindUniqueArgs<ExtArgs>>): Prisma__APIKEYClient<$Result.GetResult<Prisma.$APIKEYPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one APIKEY that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {APIKEYFindUniqueOrThrowArgs} args - Arguments to find a APIKEY
     * @example
     * // Get one APIKEY
     * const aPIKEY = await prisma.aPIKEY.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends APIKEYFindUniqueOrThrowArgs>(args: SelectSubset<T, APIKEYFindUniqueOrThrowArgs<ExtArgs>>): Prisma__APIKEYClient<$Result.GetResult<Prisma.$APIKEYPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first APIKEY that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKEYFindFirstArgs} args - Arguments to find a APIKEY
     * @example
     * // Get one APIKEY
     * const aPIKEY = await prisma.aPIKEY.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends APIKEYFindFirstArgs>(args?: SelectSubset<T, APIKEYFindFirstArgs<ExtArgs>>): Prisma__APIKEYClient<$Result.GetResult<Prisma.$APIKEYPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first APIKEY that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKEYFindFirstOrThrowArgs} args - Arguments to find a APIKEY
     * @example
     * // Get one APIKEY
     * const aPIKEY = await prisma.aPIKEY.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends APIKEYFindFirstOrThrowArgs>(args?: SelectSubset<T, APIKEYFindFirstOrThrowArgs<ExtArgs>>): Prisma__APIKEYClient<$Result.GetResult<Prisma.$APIKEYPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more APIKEYS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKEYFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all APIKEYS
     * const aPIKEYS = await prisma.aPIKEY.findMany()
     * 
     * // Get first 10 APIKEYS
     * const aPIKEYS = await prisma.aPIKEY.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aPIKEYWithIdOnly = await prisma.aPIKEY.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends APIKEYFindManyArgs>(args?: SelectSubset<T, APIKEYFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APIKEYPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a APIKEY.
     * @param {APIKEYCreateArgs} args - Arguments to create a APIKEY.
     * @example
     * // Create one APIKEY
     * const APIKEY = await prisma.aPIKEY.create({
     *   data: {
     *     // ... data to create a APIKEY
     *   }
     * })
     * 
     */
    create<T extends APIKEYCreateArgs>(args: SelectSubset<T, APIKEYCreateArgs<ExtArgs>>): Prisma__APIKEYClient<$Result.GetResult<Prisma.$APIKEYPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many APIKEYS.
     * @param {APIKEYCreateManyArgs} args - Arguments to create many APIKEYS.
     * @example
     * // Create many APIKEYS
     * const aPIKEY = await prisma.aPIKEY.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends APIKEYCreateManyArgs>(args?: SelectSubset<T, APIKEYCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many APIKEYS and returns the data saved in the database.
     * @param {APIKEYCreateManyAndReturnArgs} args - Arguments to create many APIKEYS.
     * @example
     * // Create many APIKEYS
     * const aPIKEY = await prisma.aPIKEY.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many APIKEYS and only return the `id`
     * const aPIKEYWithIdOnly = await prisma.aPIKEY.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends APIKEYCreateManyAndReturnArgs>(args?: SelectSubset<T, APIKEYCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APIKEYPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a APIKEY.
     * @param {APIKEYDeleteArgs} args - Arguments to delete one APIKEY.
     * @example
     * // Delete one APIKEY
     * const APIKEY = await prisma.aPIKEY.delete({
     *   where: {
     *     // ... filter to delete one APIKEY
     *   }
     * })
     * 
     */
    delete<T extends APIKEYDeleteArgs>(args: SelectSubset<T, APIKEYDeleteArgs<ExtArgs>>): Prisma__APIKEYClient<$Result.GetResult<Prisma.$APIKEYPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one APIKEY.
     * @param {APIKEYUpdateArgs} args - Arguments to update one APIKEY.
     * @example
     * // Update one APIKEY
     * const aPIKEY = await prisma.aPIKEY.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends APIKEYUpdateArgs>(args: SelectSubset<T, APIKEYUpdateArgs<ExtArgs>>): Prisma__APIKEYClient<$Result.GetResult<Prisma.$APIKEYPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more APIKEYS.
     * @param {APIKEYDeleteManyArgs} args - Arguments to filter APIKEYS to delete.
     * @example
     * // Delete a few APIKEYS
     * const { count } = await prisma.aPIKEY.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends APIKEYDeleteManyArgs>(args?: SelectSubset<T, APIKEYDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more APIKEYS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKEYUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many APIKEYS
     * const aPIKEY = await prisma.aPIKEY.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends APIKEYUpdateManyArgs>(args: SelectSubset<T, APIKEYUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more APIKEYS and returns the data updated in the database.
     * @param {APIKEYUpdateManyAndReturnArgs} args - Arguments to update many APIKEYS.
     * @example
     * // Update many APIKEYS
     * const aPIKEY = await prisma.aPIKEY.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more APIKEYS and only return the `id`
     * const aPIKEYWithIdOnly = await prisma.aPIKEY.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends APIKEYUpdateManyAndReturnArgs>(args: SelectSubset<T, APIKEYUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$APIKEYPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one APIKEY.
     * @param {APIKEYUpsertArgs} args - Arguments to update or create a APIKEY.
     * @example
     * // Update or create a APIKEY
     * const aPIKEY = await prisma.aPIKEY.upsert({
     *   create: {
     *     // ... data to create a APIKEY
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the APIKEY we want to update
     *   }
     * })
     */
    upsert<T extends APIKEYUpsertArgs>(args: SelectSubset<T, APIKEYUpsertArgs<ExtArgs>>): Prisma__APIKEYClient<$Result.GetResult<Prisma.$APIKEYPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of APIKEYS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKEYCountArgs} args - Arguments to filter APIKEYS to count.
     * @example
     * // Count the number of APIKEYS
     * const count = await prisma.aPIKEY.count({
     *   where: {
     *     // ... the filter for the APIKEYS we want to count
     *   }
     * })
    **/
    count<T extends APIKEYCountArgs>(
      args?: Subset<T, APIKEYCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], APIKEYCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a APIKEY.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKEYAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends APIKEYAggregateArgs>(args: Subset<T, APIKEYAggregateArgs>): Prisma.PrismaPromise<GetAPIKEYAggregateType<T>>

    /**
     * Group by APIKEY.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {APIKEYGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends APIKEYGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: APIKEYGroupByArgs['orderBy'] }
        : { orderBy?: APIKEYGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, APIKEYGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAPIKEYGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the APIKEY model
   */
  readonly fields: APIKEYFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for APIKEY.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__APIKEYClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the APIKEY model
   */
  interface APIKEYFieldRefs {
    readonly id: FieldRef<"APIKEY", 'String'>
    readonly apiKey: FieldRef<"APIKEY", 'String'>
    readonly apiSecret: FieldRef<"APIKEY", 'String'>
    readonly environment: FieldRef<"APIKEY", 'String'>
    readonly project: FieldRef<"APIKEY", 'String'>
    readonly team: FieldRef<"APIKEY", 'String'>
    readonly provider: FieldRef<"APIKEY", 'String'>
    readonly modelType: FieldRef<"APIKEY", 'String'>
    readonly reminderToUpgrade: FieldRef<"APIKEY", 'Boolean'>
    readonly createdAt: FieldRef<"APIKEY", 'DateTime'>
    readonly updatedAt: FieldRef<"APIKEY", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * APIKEY findUnique
   */
  export type APIKEYFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKEY
     */
    select?: APIKEYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKEY
     */
    omit?: APIKEYOmit<ExtArgs> | null
    /**
     * Filter, which APIKEY to fetch.
     */
    where: APIKEYWhereUniqueInput
  }

  /**
   * APIKEY findUniqueOrThrow
   */
  export type APIKEYFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKEY
     */
    select?: APIKEYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKEY
     */
    omit?: APIKEYOmit<ExtArgs> | null
    /**
     * Filter, which APIKEY to fetch.
     */
    where: APIKEYWhereUniqueInput
  }

  /**
   * APIKEY findFirst
   */
  export type APIKEYFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKEY
     */
    select?: APIKEYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKEY
     */
    omit?: APIKEYOmit<ExtArgs> | null
    /**
     * Filter, which APIKEY to fetch.
     */
    where?: APIKEYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKEYS to fetch.
     */
    orderBy?: APIKEYOrderByWithRelationInput | APIKEYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for APIKEYS.
     */
    cursor?: APIKEYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKEYS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKEYS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of APIKEYS.
     */
    distinct?: APIKEYScalarFieldEnum | APIKEYScalarFieldEnum[]
  }

  /**
   * APIKEY findFirstOrThrow
   */
  export type APIKEYFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKEY
     */
    select?: APIKEYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKEY
     */
    omit?: APIKEYOmit<ExtArgs> | null
    /**
     * Filter, which APIKEY to fetch.
     */
    where?: APIKEYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKEYS to fetch.
     */
    orderBy?: APIKEYOrderByWithRelationInput | APIKEYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for APIKEYS.
     */
    cursor?: APIKEYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKEYS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKEYS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of APIKEYS.
     */
    distinct?: APIKEYScalarFieldEnum | APIKEYScalarFieldEnum[]
  }

  /**
   * APIKEY findMany
   */
  export type APIKEYFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKEY
     */
    select?: APIKEYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKEY
     */
    omit?: APIKEYOmit<ExtArgs> | null
    /**
     * Filter, which APIKEYS to fetch.
     */
    where?: APIKEYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of APIKEYS to fetch.
     */
    orderBy?: APIKEYOrderByWithRelationInput | APIKEYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing APIKEYS.
     */
    cursor?: APIKEYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` APIKEYS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` APIKEYS.
     */
    skip?: number
    distinct?: APIKEYScalarFieldEnum | APIKEYScalarFieldEnum[]
  }

  /**
   * APIKEY create
   */
  export type APIKEYCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKEY
     */
    select?: APIKEYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKEY
     */
    omit?: APIKEYOmit<ExtArgs> | null
    /**
     * The data needed to create a APIKEY.
     */
    data: XOR<APIKEYCreateInput, APIKEYUncheckedCreateInput>
  }

  /**
   * APIKEY createMany
   */
  export type APIKEYCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many APIKEYS.
     */
    data: APIKEYCreateManyInput | APIKEYCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * APIKEY createManyAndReturn
   */
  export type APIKEYCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKEY
     */
    select?: APIKEYSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the APIKEY
     */
    omit?: APIKEYOmit<ExtArgs> | null
    /**
     * The data used to create many APIKEYS.
     */
    data: APIKEYCreateManyInput | APIKEYCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * APIKEY update
   */
  export type APIKEYUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKEY
     */
    select?: APIKEYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKEY
     */
    omit?: APIKEYOmit<ExtArgs> | null
    /**
     * The data needed to update a APIKEY.
     */
    data: XOR<APIKEYUpdateInput, APIKEYUncheckedUpdateInput>
    /**
     * Choose, which APIKEY to update.
     */
    where: APIKEYWhereUniqueInput
  }

  /**
   * APIKEY updateMany
   */
  export type APIKEYUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update APIKEYS.
     */
    data: XOR<APIKEYUpdateManyMutationInput, APIKEYUncheckedUpdateManyInput>
    /**
     * Filter which APIKEYS to update
     */
    where?: APIKEYWhereInput
    /**
     * Limit how many APIKEYS to update.
     */
    limit?: number
  }

  /**
   * APIKEY updateManyAndReturn
   */
  export type APIKEYUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKEY
     */
    select?: APIKEYSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the APIKEY
     */
    omit?: APIKEYOmit<ExtArgs> | null
    /**
     * The data used to update APIKEYS.
     */
    data: XOR<APIKEYUpdateManyMutationInput, APIKEYUncheckedUpdateManyInput>
    /**
     * Filter which APIKEYS to update
     */
    where?: APIKEYWhereInput
    /**
     * Limit how many APIKEYS to update.
     */
    limit?: number
  }

  /**
   * APIKEY upsert
   */
  export type APIKEYUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKEY
     */
    select?: APIKEYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKEY
     */
    omit?: APIKEYOmit<ExtArgs> | null
    /**
     * The filter to search for the APIKEY to update in case it exists.
     */
    where: APIKEYWhereUniqueInput
    /**
     * In case the APIKEY found by the `where` argument doesn't exist, create a new APIKEY with this data.
     */
    create: XOR<APIKEYCreateInput, APIKEYUncheckedCreateInput>
    /**
     * In case the APIKEY was found with the provided `where` argument, update it with this data.
     */
    update: XOR<APIKEYUpdateInput, APIKEYUncheckedUpdateInput>
  }

  /**
   * APIKEY delete
   */
  export type APIKEYDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKEY
     */
    select?: APIKEYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKEY
     */
    omit?: APIKEYOmit<ExtArgs> | null
    /**
     * Filter which APIKEY to delete.
     */
    where: APIKEYWhereUniqueInput
  }

  /**
   * APIKEY deleteMany
   */
  export type APIKEYDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which APIKEYS to delete
     */
    where?: APIKEYWhereInput
    /**
     * Limit how many APIKEYS to delete.
     */
    limit?: number
  }

  /**
   * APIKEY without action
   */
  export type APIKEYDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the APIKEY
     */
    select?: APIKEYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the APIKEY
     */
    omit?: APIKEYOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const APIKEYScalarFieldEnum: {
    id: 'id',
    apiKey: 'apiKey',
    apiSecret: 'apiSecret',
    environment: 'environment',
    project: 'project',
    team: 'team',
    provider: 'provider',
    modelType: 'modelType',
    reminderToUpgrade: 'reminderToUpgrade',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type APIKEYScalarFieldEnum = (typeof APIKEYScalarFieldEnum)[keyof typeof APIKEYScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type APIKEYWhereInput = {
    AND?: APIKEYWhereInput | APIKEYWhereInput[]
    OR?: APIKEYWhereInput[]
    NOT?: APIKEYWhereInput | APIKEYWhereInput[]
    id?: StringFilter<"APIKEY"> | string
    apiKey?: StringFilter<"APIKEY"> | string
    apiSecret?: StringFilter<"APIKEY"> | string
    environment?: StringFilter<"APIKEY"> | string
    project?: StringFilter<"APIKEY"> | string
    team?: StringFilter<"APIKEY"> | string
    provider?: StringFilter<"APIKEY"> | string
    modelType?: StringFilter<"APIKEY"> | string
    reminderToUpgrade?: BoolFilter<"APIKEY"> | boolean
    createdAt?: DateTimeFilter<"APIKEY"> | Date | string
    updatedAt?: DateTimeFilter<"APIKEY"> | Date | string
  }

  export type APIKEYOrderByWithRelationInput = {
    id?: SortOrder
    apiKey?: SortOrder
    apiSecret?: SortOrder
    environment?: SortOrder
    project?: SortOrder
    team?: SortOrder
    provider?: SortOrder
    modelType?: SortOrder
    reminderToUpgrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type APIKEYWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: APIKEYWhereInput | APIKEYWhereInput[]
    OR?: APIKEYWhereInput[]
    NOT?: APIKEYWhereInput | APIKEYWhereInput[]
    apiKey?: StringFilter<"APIKEY"> | string
    apiSecret?: StringFilter<"APIKEY"> | string
    environment?: StringFilter<"APIKEY"> | string
    project?: StringFilter<"APIKEY"> | string
    team?: StringFilter<"APIKEY"> | string
    provider?: StringFilter<"APIKEY"> | string
    modelType?: StringFilter<"APIKEY"> | string
    reminderToUpgrade?: BoolFilter<"APIKEY"> | boolean
    createdAt?: DateTimeFilter<"APIKEY"> | Date | string
    updatedAt?: DateTimeFilter<"APIKEY"> | Date | string
  }, "id">

  export type APIKEYOrderByWithAggregationInput = {
    id?: SortOrder
    apiKey?: SortOrder
    apiSecret?: SortOrder
    environment?: SortOrder
    project?: SortOrder
    team?: SortOrder
    provider?: SortOrder
    modelType?: SortOrder
    reminderToUpgrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: APIKEYCountOrderByAggregateInput
    _max?: APIKEYMaxOrderByAggregateInput
    _min?: APIKEYMinOrderByAggregateInput
  }

  export type APIKEYScalarWhereWithAggregatesInput = {
    AND?: APIKEYScalarWhereWithAggregatesInput | APIKEYScalarWhereWithAggregatesInput[]
    OR?: APIKEYScalarWhereWithAggregatesInput[]
    NOT?: APIKEYScalarWhereWithAggregatesInput | APIKEYScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"APIKEY"> | string
    apiKey?: StringWithAggregatesFilter<"APIKEY"> | string
    apiSecret?: StringWithAggregatesFilter<"APIKEY"> | string
    environment?: StringWithAggregatesFilter<"APIKEY"> | string
    project?: StringWithAggregatesFilter<"APIKEY"> | string
    team?: StringWithAggregatesFilter<"APIKEY"> | string
    provider?: StringWithAggregatesFilter<"APIKEY"> | string
    modelType?: StringWithAggregatesFilter<"APIKEY"> | string
    reminderToUpgrade?: BoolWithAggregatesFilter<"APIKEY"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"APIKEY"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"APIKEY"> | Date | string
  }

  export type APIKEYCreateInput = {
    id?: string
    apiKey: string
    apiSecret: string
    environment: string
    project: string
    team: string
    provider: string
    modelType: string
    reminderToUpgrade: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type APIKEYUncheckedCreateInput = {
    id?: string
    apiKey: string
    apiSecret: string
    environment: string
    project: string
    team: string
    provider: string
    modelType: string
    reminderToUpgrade: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type APIKEYUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    apiSecret?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    modelType?: StringFieldUpdateOperationsInput | string
    reminderToUpgrade?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type APIKEYUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    apiSecret?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    modelType?: StringFieldUpdateOperationsInput | string
    reminderToUpgrade?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type APIKEYCreateManyInput = {
    id?: string
    apiKey: string
    apiSecret: string
    environment: string
    project: string
    team: string
    provider: string
    modelType: string
    reminderToUpgrade: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type APIKEYUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    apiSecret?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    modelType?: StringFieldUpdateOperationsInput | string
    reminderToUpgrade?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type APIKEYUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    apiSecret?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    modelType?: StringFieldUpdateOperationsInput | string
    reminderToUpgrade?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type APIKEYCountOrderByAggregateInput = {
    id?: SortOrder
    apiKey?: SortOrder
    apiSecret?: SortOrder
    environment?: SortOrder
    project?: SortOrder
    team?: SortOrder
    provider?: SortOrder
    modelType?: SortOrder
    reminderToUpgrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type APIKEYMaxOrderByAggregateInput = {
    id?: SortOrder
    apiKey?: SortOrder
    apiSecret?: SortOrder
    environment?: SortOrder
    project?: SortOrder
    team?: SortOrder
    provider?: SortOrder
    modelType?: SortOrder
    reminderToUpgrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type APIKEYMinOrderByAggregateInput = {
    id?: SortOrder
    apiKey?: SortOrder
    apiSecret?: SortOrder
    environment?: SortOrder
    project?: SortOrder
    team?: SortOrder
    provider?: SortOrder
    modelType?: SortOrder
    reminderToUpgrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}