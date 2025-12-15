
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Watchlist
 * 
 */
export type Watchlist = $Result.DefaultSelection<Prisma.$WatchlistPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Produk
 * 
 */
export type Produk = $Result.DefaultSelection<Prisma.$ProdukPayload>
/**
 * Model Bid
 * 
 */
export type Bid = $Result.DefaultSelection<Prisma.$BidPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Kategori: {
  SEMUA: 'SEMUA',
  RAMAI: 'RAMAI',
  SEGERA: 'SEGERA',
  BARU: 'BARU',
  DIBAWAH100: 'DIBAWAH100'
};

export type Kategori = (typeof Kategori)[keyof typeof Kategori]

}

export type Kategori = $Enums.Kategori

export const Kategori: typeof $Enums.Kategori

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Watchlists
 * const watchlists = await prisma.watchlist.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Watchlists
   * const watchlists = await prisma.watchlist.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.watchlist`: Exposes CRUD operations for the **Watchlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watchlists
    * const watchlists = await prisma.watchlist.findMany()
    * ```
    */
  get watchlist(): Prisma.WatchlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produk`: Exposes CRUD operations for the **Produk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produks
    * const produks = await prisma.produk.findMany()
    * ```
    */
  get produk(): Prisma.ProdukDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bid`: Exposes CRUD operations for the **Bid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bids
    * const bids = await prisma.bid.findMany()
    * ```
    */
  get bid(): Prisma.BidDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Watchlist: 'Watchlist',
    Setting: 'Setting',
    User: 'User',
    Produk: 'Produk',
    Bid: 'Bid'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "watchlist" | "setting" | "user" | "produk" | "bid"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Watchlist: {
        payload: Prisma.$WatchlistPayload<ExtArgs>
        fields: Prisma.WatchlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findFirst: {
            args: Prisma.WatchlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findMany: {
            args: Prisma.WatchlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          create: {
            args: Prisma.WatchlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          createMany: {
            args: Prisma.WatchlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          delete: {
            args: Prisma.WatchlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          update: {
            args: Prisma.WatchlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          deleteMany: {
            args: Prisma.WatchlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          upsert: {
            args: Prisma.WatchlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          aggregate: {
            args: Prisma.WatchlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchlist>
          }
          groupBy: {
            args: Prisma.WatchlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchlistCountArgs<ExtArgs>
            result: $Utils.Optional<WatchlistCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Produk: {
        payload: Prisma.$ProdukPayload<ExtArgs>
        fields: Prisma.ProdukFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdukFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdukFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          findFirst: {
            args: Prisma.ProdukFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdukFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          findMany: {
            args: Prisma.ProdukFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          create: {
            args: Prisma.ProdukCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          createMany: {
            args: Prisma.ProdukCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdukCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          delete: {
            args: Prisma.ProdukDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          update: {
            args: Prisma.ProdukUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          deleteMany: {
            args: Prisma.ProdukDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdukUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdukUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          upsert: {
            args: Prisma.ProdukUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          aggregate: {
            args: Prisma.ProdukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduk>
          }
          groupBy: {
            args: Prisma.ProdukGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdukGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdukCountArgs<ExtArgs>
            result: $Utils.Optional<ProdukCountAggregateOutputType> | number
          }
        }
      }
      Bid: {
        payload: Prisma.$BidPayload<ExtArgs>
        fields: Prisma.BidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findFirst: {
            args: Prisma.BidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findMany: {
            args: Prisma.BidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          create: {
            args: Prisma.BidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          createMany: {
            args: Prisma.BidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          delete: {
            args: Prisma.BidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          update: {
            args: Prisma.BidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          deleteMany: {
            args: Prisma.BidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BidUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          upsert: {
            args: Prisma.BidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          aggregate: {
            args: Prisma.BidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBid>
          }
          groupBy: {
            args: Prisma.BidGroupByArgs<ExtArgs>
            result: $Utils.Optional<BidGroupByOutputType>[]
          }
          count: {
            args: Prisma.BidCountArgs<ExtArgs>
            result: $Utils.Optional<BidCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    watchlist?: WatchlistOmit
    setting?: SettingOmit
    user?: UserOmit
    produk?: ProdukOmit
    bid?: BidOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bids: number
    watchlists: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | UserCountOutputTypeCountBidsArgs
    watchlists?: boolean | UserCountOutputTypeCountWatchlistsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
  }


  /**
   * Count Type ProdukCountOutputType
   */

  export type ProdukCountOutputType = {
    bids: number
    watchlists: number
  }

  export type ProdukCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | ProdukCountOutputTypeCountBidsArgs
    watchlists?: boolean | ProdukCountOutputTypeCountWatchlistsArgs
  }

  // Custom InputTypes
  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukCountOutputType
     */
    select?: ProdukCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountWatchlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Watchlist
   */

  export type AggregateWatchlist = {
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  export type WatchlistMinAggregateOutputType = {
    id: string | null
    userId: string | null
    produkId: string | null
    createdAt: Date | null
  }

  export type WatchlistMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    produkId: string | null
    createdAt: Date | null
  }

  export type WatchlistCountAggregateOutputType = {
    id: number
    userId: number
    produkId: number
    createdAt: number
    _all: number
  }


  export type WatchlistMinAggregateInputType = {
    id?: true
    userId?: true
    produkId?: true
    createdAt?: true
  }

  export type WatchlistMaxAggregateInputType = {
    id?: true
    userId?: true
    produkId?: true
    createdAt?: true
  }

  export type WatchlistCountAggregateInputType = {
    id?: true
    userId?: true
    produkId?: true
    createdAt?: true
    _all?: true
  }

  export type WatchlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlist to aggregate.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Watchlists
    **/
    _count?: true | WatchlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistMaxAggregateInputType
  }

  export type GetWatchlistAggregateType<T extends WatchlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlist[P]>
      : GetScalarType<T[P], AggregateWatchlist[P]>
  }




  export type WatchlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithAggregationInput | WatchlistOrderByWithAggregationInput[]
    by: WatchlistScalarFieldEnum[] | WatchlistScalarFieldEnum
    having?: WatchlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistCountAggregateInputType | true
    _min?: WatchlistMinAggregateInputType
    _max?: WatchlistMaxAggregateInputType
  }

  export type WatchlistGroupByOutputType = {
    id: string
    userId: string
    produkId: string
    createdAt: Date
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  type GetWatchlistGroupByPayload<T extends WatchlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
        }
      >
    >


  export type WatchlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    produkId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    produkId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    produkId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectScalar = {
    id?: boolean
    userId?: boolean
    produkId?: boolean
    createdAt?: boolean
  }

  export type WatchlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "produkId" | "createdAt", ExtArgs["result"]["watchlist"]>
  export type WatchlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }
  export type WatchlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }
  export type WatchlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }

  export type $WatchlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Watchlist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      produk: Prisma.$ProdukPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      produkId: string
      createdAt: Date
    }, ExtArgs["result"]["watchlist"]>
    composites: {}
  }

  type WatchlistGetPayload<S extends boolean | null | undefined | WatchlistDefaultArgs> = $Result.GetResult<Prisma.$WatchlistPayload, S>

  type WatchlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchlistCountAggregateInputType | true
    }

  export interface WatchlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Watchlist'], meta: { name: 'Watchlist' } }
    /**
     * Find zero or one Watchlist that matches the filter.
     * @param {WatchlistFindUniqueArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchlistFindUniqueArgs>(args: SelectSubset<T, WatchlistFindUniqueArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Watchlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchlistFindUniqueOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchlistFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watchlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchlistFindFirstArgs>(args?: SelectSubset<T, WatchlistFindFirstArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watchlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchlistFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Watchlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watchlists
     * const watchlists = await prisma.watchlist.findMany()
     * 
     * // Get first 10 Watchlists
     * const watchlists = await prisma.watchlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchlistFindManyArgs>(args?: SelectSubset<T, WatchlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Watchlist.
     * @param {WatchlistCreateArgs} args - Arguments to create a Watchlist.
     * @example
     * // Create one Watchlist
     * const Watchlist = await prisma.watchlist.create({
     *   data: {
     *     // ... data to create a Watchlist
     *   }
     * })
     * 
     */
    create<T extends WatchlistCreateArgs>(args: SelectSubset<T, WatchlistCreateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Watchlists.
     * @param {WatchlistCreateManyArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchlistCreateManyArgs>(args?: SelectSubset<T, WatchlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Watchlists and returns the data saved in the database.
     * @param {WatchlistCreateManyAndReturnArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Watchlists and only return the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchlistCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Watchlist.
     * @param {WatchlistDeleteArgs} args - Arguments to delete one Watchlist.
     * @example
     * // Delete one Watchlist
     * const Watchlist = await prisma.watchlist.delete({
     *   where: {
     *     // ... filter to delete one Watchlist
     *   }
     * })
     * 
     */
    delete<T extends WatchlistDeleteArgs>(args: SelectSubset<T, WatchlistDeleteArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Watchlist.
     * @param {WatchlistUpdateArgs} args - Arguments to update one Watchlist.
     * @example
     * // Update one Watchlist
     * const watchlist = await prisma.watchlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchlistUpdateArgs>(args: SelectSubset<T, WatchlistUpdateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Watchlists.
     * @param {WatchlistDeleteManyArgs} args - Arguments to filter Watchlists to delete.
     * @example
     * // Delete a few Watchlists
     * const { count } = await prisma.watchlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchlistDeleteManyArgs>(args?: SelectSubset<T, WatchlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchlistUpdateManyArgs>(args: SelectSubset<T, WatchlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists and returns the data updated in the database.
     * @param {WatchlistUpdateManyAndReturnArgs} args - Arguments to update many Watchlists.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Watchlists and only return the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.updateManyAndReturn({
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
    updateManyAndReturn<T extends WatchlistUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Watchlist.
     * @param {WatchlistUpsertArgs} args - Arguments to update or create a Watchlist.
     * @example
     * // Update or create a Watchlist
     * const watchlist = await prisma.watchlist.upsert({
     *   create: {
     *     // ... data to create a Watchlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watchlist we want to update
     *   }
     * })
     */
    upsert<T extends WatchlistUpsertArgs>(args: SelectSubset<T, WatchlistUpsertArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCountArgs} args - Arguments to filter Watchlists to count.
     * @example
     * // Count the number of Watchlists
     * const count = await prisma.watchlist.count({
     *   where: {
     *     // ... the filter for the Watchlists we want to count
     *   }
     * })
    **/
    count<T extends WatchlistCountArgs>(
      args?: Subset<T, WatchlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchlistAggregateArgs>(args: Subset<T, WatchlistAggregateArgs>): Prisma.PrismaPromise<GetWatchlistAggregateType<T>>

    /**
     * Group by Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistGroupByArgs} args - Group by arguments.
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
      T extends WatchlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatchlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Watchlist model
   */
  readonly fields: WatchlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Watchlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produk<T extends ProdukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdukDefaultArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Watchlist model
   */
  interface WatchlistFieldRefs {
    readonly id: FieldRef<"Watchlist", 'String'>
    readonly userId: FieldRef<"Watchlist", 'String'>
    readonly produkId: FieldRef<"Watchlist", 'String'>
    readonly createdAt: FieldRef<"Watchlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Watchlist findUnique
   */
  export type WatchlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findUniqueOrThrow
   */
  export type WatchlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findFirst
   */
  export type WatchlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findFirstOrThrow
   */
  export type WatchlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findMany
   */
  export type WatchlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlists to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist create
   */
  export type WatchlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Watchlist.
     */
    data: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
  }

  /**
   * Watchlist createMany
   */
  export type WatchlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Watchlist createManyAndReturn
   */
  export type WatchlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watchlist update
   */
  export type WatchlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Watchlist.
     */
    data: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
    /**
     * Choose, which Watchlist to update.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist updateMany
   */
  export type WatchlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to update.
     */
    limit?: number
  }

  /**
   * Watchlist updateManyAndReturn
   */
  export type WatchlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watchlist upsert
   */
  export type WatchlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Watchlist to update in case it exists.
     */
    where: WatchlistWhereUniqueInput
    /**
     * In case the Watchlist found by the `where` argument doesn't exist, create a new Watchlist with this data.
     */
    create: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
    /**
     * In case the Watchlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
  }

  /**
   * Watchlist delete
   */
  export type WatchlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter which Watchlist to delete.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist deleteMany
   */
  export type WatchlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlists to delete
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to delete.
     */
    limit?: number
  }

  /**
   * Watchlist without action
   */
  export type WatchlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type SettingMaxAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type SettingCountAggregateOutputType = {
    key: number
    value: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    key?: true
    value?: true
  }

  export type SettingMaxAggregateInputType = {
    key?: true
    value?: true
  }

  export type SettingCountAggregateInputType = {
    key?: true
    value?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    key: string
    value: string
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    key?: boolean
    value?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value", ExtArgs["result"]["setting"]>

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const settingWithKeyOnly = await prisma.setting.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `key`
     * const settingWithKeyOnly = await prisma.setting.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `key`
     * const settingWithKeyOnly = await prisma.setting.updateManyAndReturn({
     *   select: { key: true },
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
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
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
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly key: FieldRef<"Setting", 'String'>
    readonly value: FieldRef<"Setting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    bids?: boolean | User$bidsArgs<ExtArgs>
    watchlists?: boolean | User$watchlistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | User$bidsArgs<ExtArgs>
    watchlists?: boolean | User$watchlistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bids: Prisma.$BidPayload<ExtArgs>[]
      watchlists: Prisma.$WatchlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bids<T extends User$bidsArgs<ExtArgs> = {}>(args?: Subset<T, User$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchlists<T extends User$watchlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$watchlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bids
   */
  export type User$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * User.watchlists
   */
  export type User$watchlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    cursor?: WatchlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Produk
   */

  export type AggregateProduk = {
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  export type ProdukAvgAggregateOutputType = {
    harga_awal: number | null
    jumlah_seat: number | null
    tahun: number | null
    kilometer: number | null
  }

  export type ProdukSumAggregateOutputType = {
    harga_awal: number | null
    jumlah_seat: number | null
    tahun: number | null
    kilometer: number | null
  }

  export type ProdukMinAggregateOutputType = {
    id: string | null
    nama_barang: string | null
    tanggal: Date | null
    harga_awal: number | null
    deskripsi: string | null
    image_url: string | null
    merk_mobil: string | null
    tipe_mobil: string | null
    transmisi: string | null
    jumlah_seat: number | null
    tahun: number | null
    kilometer: number | null
    kategori: $Enums.Kategori | null
    createdAt: Date | null
  }

  export type ProdukMaxAggregateOutputType = {
    id: string | null
    nama_barang: string | null
    tanggal: Date | null
    harga_awal: number | null
    deskripsi: string | null
    image_url: string | null
    merk_mobil: string | null
    tipe_mobil: string | null
    transmisi: string | null
    jumlah_seat: number | null
    tahun: number | null
    kilometer: number | null
    kategori: $Enums.Kategori | null
    createdAt: Date | null
  }

  export type ProdukCountAggregateOutputType = {
    id: number
    nama_barang: number
    tanggal: number
    harga_awal: number
    deskripsi: number
    image_url: number
    merk_mobil: number
    tipe_mobil: number
    transmisi: number
    jumlah_seat: number
    tahun: number
    kilometer: number
    kategori: number
    createdAt: number
    _all: number
  }


  export type ProdukAvgAggregateInputType = {
    harga_awal?: true
    jumlah_seat?: true
    tahun?: true
    kilometer?: true
  }

  export type ProdukSumAggregateInputType = {
    harga_awal?: true
    jumlah_seat?: true
    tahun?: true
    kilometer?: true
  }

  export type ProdukMinAggregateInputType = {
    id?: true
    nama_barang?: true
    tanggal?: true
    harga_awal?: true
    deskripsi?: true
    image_url?: true
    merk_mobil?: true
    tipe_mobil?: true
    transmisi?: true
    jumlah_seat?: true
    tahun?: true
    kilometer?: true
    kategori?: true
    createdAt?: true
  }

  export type ProdukMaxAggregateInputType = {
    id?: true
    nama_barang?: true
    tanggal?: true
    harga_awal?: true
    deskripsi?: true
    image_url?: true
    merk_mobil?: true
    tipe_mobil?: true
    transmisi?: true
    jumlah_seat?: true
    tahun?: true
    kilometer?: true
    kategori?: true
    createdAt?: true
  }

  export type ProdukCountAggregateInputType = {
    id?: true
    nama_barang?: true
    tanggal?: true
    harga_awal?: true
    deskripsi?: true
    image_url?: true
    merk_mobil?: true
    tipe_mobil?: true
    transmisi?: true
    jumlah_seat?: true
    tahun?: true
    kilometer?: true
    kategori?: true
    createdAt?: true
    _all?: true
  }

  export type ProdukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produk to aggregate.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produks
    **/
    _count?: true | ProdukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukMaxAggregateInputType
  }

  export type GetProdukAggregateType<T extends ProdukAggregateArgs> = {
        [P in keyof T & keyof AggregateProduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduk[P]>
      : GetScalarType<T[P], AggregateProduk[P]>
  }




  export type ProdukGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdukWhereInput
    orderBy?: ProdukOrderByWithAggregationInput | ProdukOrderByWithAggregationInput[]
    by: ProdukScalarFieldEnum[] | ProdukScalarFieldEnum
    having?: ProdukScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukCountAggregateInputType | true
    _avg?: ProdukAvgAggregateInputType
    _sum?: ProdukSumAggregateInputType
    _min?: ProdukMinAggregateInputType
    _max?: ProdukMaxAggregateInputType
  }

  export type ProdukGroupByOutputType = {
    id: string
    nama_barang: string
    tanggal: Date
    harga_awal: number
    deskripsi: string
    image_url: string | null
    merk_mobil: string | null
    tipe_mobil: string | null
    transmisi: string | null
    jumlah_seat: number | null
    tahun: number | null
    kilometer: number | null
    kategori: $Enums.Kategori
    createdAt: Date
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  type GetProdukGroupByPayload<T extends ProdukGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukGroupByOutputType[P]>
        }
      >
    >


  export type ProdukSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_barang?: boolean
    tanggal?: boolean
    harga_awal?: boolean
    deskripsi?: boolean
    image_url?: boolean
    merk_mobil?: boolean
    tipe_mobil?: boolean
    transmisi?: boolean
    jumlah_seat?: boolean
    tahun?: boolean
    kilometer?: boolean
    kategori?: boolean
    createdAt?: boolean
    bids?: boolean | Produk$bidsArgs<ExtArgs>
    watchlists?: boolean | Produk$watchlistsArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_barang?: boolean
    tanggal?: boolean
    harga_awal?: boolean
    deskripsi?: boolean
    image_url?: boolean
    merk_mobil?: boolean
    tipe_mobil?: boolean
    transmisi?: boolean
    jumlah_seat?: boolean
    tahun?: boolean
    kilometer?: boolean
    kategori?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_barang?: boolean
    tanggal?: boolean
    harga_awal?: boolean
    deskripsi?: boolean
    image_url?: boolean
    merk_mobil?: boolean
    tipe_mobil?: boolean
    transmisi?: boolean
    jumlah_seat?: boolean
    tahun?: boolean
    kilometer?: boolean
    kategori?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectScalar = {
    id?: boolean
    nama_barang?: boolean
    tanggal?: boolean
    harga_awal?: boolean
    deskripsi?: boolean
    image_url?: boolean
    merk_mobil?: boolean
    tipe_mobil?: boolean
    transmisi?: boolean
    jumlah_seat?: boolean
    tahun?: boolean
    kilometer?: boolean
    kategori?: boolean
    createdAt?: boolean
  }

  export type ProdukOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama_barang" | "tanggal" | "harga_awal" | "deskripsi" | "image_url" | "merk_mobil" | "tipe_mobil" | "transmisi" | "jumlah_seat" | "tahun" | "kilometer" | "kategori" | "createdAt", ExtArgs["result"]["produk"]>
  export type ProdukInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | Produk$bidsArgs<ExtArgs>
    watchlists?: boolean | Produk$watchlistsArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdukIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProdukIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProdukPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produk"
    objects: {
      bids: Prisma.$BidPayload<ExtArgs>[]
      watchlists: Prisma.$WatchlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama_barang: string
      tanggal: Date
      harga_awal: number
      deskripsi: string
      image_url: string | null
      merk_mobil: string | null
      tipe_mobil: string | null
      transmisi: string | null
      jumlah_seat: number | null
      tahun: number | null
      kilometer: number | null
      kategori: $Enums.Kategori
      createdAt: Date
    }, ExtArgs["result"]["produk"]>
    composites: {}
  }

  type ProdukGetPayload<S extends boolean | null | undefined | ProdukDefaultArgs> = $Result.GetResult<Prisma.$ProdukPayload, S>

  type ProdukCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdukFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdukCountAggregateInputType | true
    }

  export interface ProdukDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produk'], meta: { name: 'Produk' } }
    /**
     * Find zero or one Produk that matches the filter.
     * @param {ProdukFindUniqueArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdukFindUniqueArgs>(args: SelectSubset<T, ProdukFindUniqueArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdukFindUniqueOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdukFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdukFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindFirstArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdukFindFirstArgs>(args?: SelectSubset<T, ProdukFindFirstArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindFirstOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdukFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdukFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produks
     * const produks = await prisma.produk.findMany()
     * 
     * // Get first 10 Produks
     * const produks = await prisma.produk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produkWithIdOnly = await prisma.produk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdukFindManyArgs>(args?: SelectSubset<T, ProdukFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produk.
     * @param {ProdukCreateArgs} args - Arguments to create a Produk.
     * @example
     * // Create one Produk
     * const Produk = await prisma.produk.create({
     *   data: {
     *     // ... data to create a Produk
     *   }
     * })
     * 
     */
    create<T extends ProdukCreateArgs>(args: SelectSubset<T, ProdukCreateArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produks.
     * @param {ProdukCreateManyArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdukCreateManyArgs>(args?: SelectSubset<T, ProdukCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produks and returns the data saved in the database.
     * @param {ProdukCreateManyAndReturnArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produks and only return the `id`
     * const produkWithIdOnly = await prisma.produk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdukCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdukCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produk.
     * @param {ProdukDeleteArgs} args - Arguments to delete one Produk.
     * @example
     * // Delete one Produk
     * const Produk = await prisma.produk.delete({
     *   where: {
     *     // ... filter to delete one Produk
     *   }
     * })
     * 
     */
    delete<T extends ProdukDeleteArgs>(args: SelectSubset<T, ProdukDeleteArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produk.
     * @param {ProdukUpdateArgs} args - Arguments to update one Produk.
     * @example
     * // Update one Produk
     * const produk = await prisma.produk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdukUpdateArgs>(args: SelectSubset<T, ProdukUpdateArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produks.
     * @param {ProdukDeleteManyArgs} args - Arguments to filter Produks to delete.
     * @example
     * // Delete a few Produks
     * const { count } = await prisma.produk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdukDeleteManyArgs>(args?: SelectSubset<T, ProdukDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdukUpdateManyArgs>(args: SelectSubset<T, ProdukUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks and returns the data updated in the database.
     * @param {ProdukUpdateManyAndReturnArgs} args - Arguments to update many Produks.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produks and only return the `id`
     * const produkWithIdOnly = await prisma.produk.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdukUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdukUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produk.
     * @param {ProdukUpsertArgs} args - Arguments to update or create a Produk.
     * @example
     * // Update or create a Produk
     * const produk = await prisma.produk.upsert({
     *   create: {
     *     // ... data to create a Produk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produk we want to update
     *   }
     * })
     */
    upsert<T extends ProdukUpsertArgs>(args: SelectSubset<T, ProdukUpsertArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukCountArgs} args - Arguments to filter Produks to count.
     * @example
     * // Count the number of Produks
     * const count = await prisma.produk.count({
     *   where: {
     *     // ... the filter for the Produks we want to count
     *   }
     * })
    **/
    count<T extends ProdukCountArgs>(
      args?: Subset<T, ProdukCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdukAggregateArgs>(args: Subset<T, ProdukAggregateArgs>): Prisma.PrismaPromise<GetProdukAggregateType<T>>

    /**
     * Group by Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukGroupByArgs} args - Group by arguments.
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
      T extends ProdukGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdukGroupByArgs['orderBy'] }
        : { orderBy?: ProdukGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produk model
   */
  readonly fields: ProdukFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdukClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bids<T extends Produk$bidsArgs<ExtArgs> = {}>(args?: Subset<T, Produk$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchlists<T extends Produk$watchlistsArgs<ExtArgs> = {}>(args?: Subset<T, Produk$watchlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produk model
   */
  interface ProdukFieldRefs {
    readonly id: FieldRef<"Produk", 'String'>
    readonly nama_barang: FieldRef<"Produk", 'String'>
    readonly tanggal: FieldRef<"Produk", 'DateTime'>
    readonly harga_awal: FieldRef<"Produk", 'Int'>
    readonly deskripsi: FieldRef<"Produk", 'String'>
    readonly image_url: FieldRef<"Produk", 'String'>
    readonly merk_mobil: FieldRef<"Produk", 'String'>
    readonly tipe_mobil: FieldRef<"Produk", 'String'>
    readonly transmisi: FieldRef<"Produk", 'String'>
    readonly jumlah_seat: FieldRef<"Produk", 'Int'>
    readonly tahun: FieldRef<"Produk", 'Int'>
    readonly kilometer: FieldRef<"Produk", 'Int'>
    readonly kategori: FieldRef<"Produk", 'Kategori'>
    readonly createdAt: FieldRef<"Produk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Produk findUnique
   */
  export type ProdukFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk findUniqueOrThrow
   */
  export type ProdukFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk findFirst
   */
  export type ProdukFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Produk findFirstOrThrow
   */
  export type ProdukFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Produk findMany
   */
  export type ProdukFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produks to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Produk create
   */
  export type ProdukCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The data needed to create a Produk.
     */
    data: XOR<ProdukCreateInput, ProdukUncheckedCreateInput>
  }

  /**
   * Produk createMany
   */
  export type ProdukCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produks.
     */
    data: ProdukCreateManyInput | ProdukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produk createManyAndReturn
   */
  export type ProdukCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * The data used to create many Produks.
     */
    data: ProdukCreateManyInput | ProdukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produk update
   */
  export type ProdukUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The data needed to update a Produk.
     */
    data: XOR<ProdukUpdateInput, ProdukUncheckedUpdateInput>
    /**
     * Choose, which Produk to update.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk updateMany
   */
  export type ProdukUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produks.
     */
    data: XOR<ProdukUpdateManyMutationInput, ProdukUncheckedUpdateManyInput>
    /**
     * Filter which Produks to update
     */
    where?: ProdukWhereInput
    /**
     * Limit how many Produks to update.
     */
    limit?: number
  }

  /**
   * Produk updateManyAndReturn
   */
  export type ProdukUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * The data used to update Produks.
     */
    data: XOR<ProdukUpdateManyMutationInput, ProdukUncheckedUpdateManyInput>
    /**
     * Filter which Produks to update
     */
    where?: ProdukWhereInput
    /**
     * Limit how many Produks to update.
     */
    limit?: number
  }

  /**
   * Produk upsert
   */
  export type ProdukUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The filter to search for the Produk to update in case it exists.
     */
    where: ProdukWhereUniqueInput
    /**
     * In case the Produk found by the `where` argument doesn't exist, create a new Produk with this data.
     */
    create: XOR<ProdukCreateInput, ProdukUncheckedCreateInput>
    /**
     * In case the Produk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdukUpdateInput, ProdukUncheckedUpdateInput>
  }

  /**
   * Produk delete
   */
  export type ProdukDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter which Produk to delete.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk deleteMany
   */
  export type ProdukDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produks to delete
     */
    where?: ProdukWhereInput
    /**
     * Limit how many Produks to delete.
     */
    limit?: number
  }

  /**
   * Produk.bids
   */
  export type Produk$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Produk.watchlists
   */
  export type Produk$watchlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    cursor?: WatchlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Produk without action
   */
  export type ProdukDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
  }


  /**
   * Model Bid
   */

  export type AggregateBid = {
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  export type BidAvgAggregateOutputType = {
    bidAmount: number | null
  }

  export type BidSumAggregateOutputType = {
    bidAmount: number | null
  }

  export type BidMinAggregateOutputType = {
    id: string | null
    userId: string | null
    produkId: string | null
    bidAmount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type BidMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    produkId: string | null
    bidAmount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type BidCountAggregateOutputType = {
    id: number
    userId: number
    produkId: number
    bidAmount: number
    status: number
    createdAt: number
    _all: number
  }


  export type BidAvgAggregateInputType = {
    bidAmount?: true
  }

  export type BidSumAggregateInputType = {
    bidAmount?: true
  }

  export type BidMinAggregateInputType = {
    id?: true
    userId?: true
    produkId?: true
    bidAmount?: true
    status?: true
    createdAt?: true
  }

  export type BidMaxAggregateInputType = {
    id?: true
    userId?: true
    produkId?: true
    bidAmount?: true
    status?: true
    createdAt?: true
  }

  export type BidCountAggregateInputType = {
    id?: true
    userId?: true
    produkId?: true
    bidAmount?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type BidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bid to aggregate.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bids
    **/
    _count?: true | BidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BidMaxAggregateInputType
  }

  export type GetBidAggregateType<T extends BidAggregateArgs> = {
        [P in keyof T & keyof AggregateBid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBid[P]>
      : GetScalarType<T[P], AggregateBid[P]>
  }




  export type BidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
    orderBy?: BidOrderByWithAggregationInput | BidOrderByWithAggregationInput[]
    by: BidScalarFieldEnum[] | BidScalarFieldEnum
    having?: BidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BidCountAggregateInputType | true
    _avg?: BidAvgAggregateInputType
    _sum?: BidSumAggregateInputType
    _min?: BidMinAggregateInputType
    _max?: BidMaxAggregateInputType
  }

  export type BidGroupByOutputType = {
    id: string
    userId: string
    produkId: string
    bidAmount: number
    status: string
    createdAt: Date
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  type GetBidGroupByPayload<T extends BidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BidGroupByOutputType[P]>
            : GetScalarType<T[P], BidGroupByOutputType[P]>
        }
      >
    >


  export type BidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    produkId?: boolean
    bidAmount?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    produkId?: boolean
    bidAmount?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    produkId?: boolean
    bidAmount?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectScalar = {
    id?: boolean
    userId?: boolean
    produkId?: boolean
    bidAmount?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type BidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "produkId" | "bidAmount" | "status" | "createdAt", ExtArgs["result"]["bid"]>
  export type BidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }
  export type BidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }
  export type BidIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }

  export type $BidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bid"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      produk: Prisma.$ProdukPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      produkId: string
      bidAmount: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["bid"]>
    composites: {}
  }

  type BidGetPayload<S extends boolean | null | undefined | BidDefaultArgs> = $Result.GetResult<Prisma.$BidPayload, S>

  type BidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BidCountAggregateInputType | true
    }

  export interface BidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bid'], meta: { name: 'Bid' } }
    /**
     * Find zero or one Bid that matches the filter.
     * @param {BidFindUniqueArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BidFindUniqueArgs>(args: SelectSubset<T, BidFindUniqueArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BidFindUniqueOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BidFindUniqueOrThrowArgs>(args: SelectSubset<T, BidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BidFindFirstArgs>(args?: SelectSubset<T, BidFindFirstArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BidFindFirstOrThrowArgs>(args?: SelectSubset<T, BidFindFirstOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bids
     * const bids = await prisma.bid.findMany()
     * 
     * // Get first 10 Bids
     * const bids = await prisma.bid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bidWithIdOnly = await prisma.bid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BidFindManyArgs>(args?: SelectSubset<T, BidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bid.
     * @param {BidCreateArgs} args - Arguments to create a Bid.
     * @example
     * // Create one Bid
     * const Bid = await prisma.bid.create({
     *   data: {
     *     // ... data to create a Bid
     *   }
     * })
     * 
     */
    create<T extends BidCreateArgs>(args: SelectSubset<T, BidCreateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bids.
     * @param {BidCreateManyArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BidCreateManyArgs>(args?: SelectSubset<T, BidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bids and returns the data saved in the database.
     * @param {BidCreateManyAndReturnArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BidCreateManyAndReturnArgs>(args?: SelectSubset<T, BidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bid.
     * @param {BidDeleteArgs} args - Arguments to delete one Bid.
     * @example
     * // Delete one Bid
     * const Bid = await prisma.bid.delete({
     *   where: {
     *     // ... filter to delete one Bid
     *   }
     * })
     * 
     */
    delete<T extends BidDeleteArgs>(args: SelectSubset<T, BidDeleteArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bid.
     * @param {BidUpdateArgs} args - Arguments to update one Bid.
     * @example
     * // Update one Bid
     * const bid = await prisma.bid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BidUpdateArgs>(args: SelectSubset<T, BidUpdateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bids.
     * @param {BidDeleteManyArgs} args - Arguments to filter Bids to delete.
     * @example
     * // Delete a few Bids
     * const { count } = await prisma.bid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BidDeleteManyArgs>(args?: SelectSubset<T, BidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BidUpdateManyArgs>(args: SelectSubset<T, BidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids and returns the data updated in the database.
     * @param {BidUpdateManyAndReturnArgs} args - Arguments to update many Bids.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.updateManyAndReturn({
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
    updateManyAndReturn<T extends BidUpdateManyAndReturnArgs>(args: SelectSubset<T, BidUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bid.
     * @param {BidUpsertArgs} args - Arguments to update or create a Bid.
     * @example
     * // Update or create a Bid
     * const bid = await prisma.bid.upsert({
     *   create: {
     *     // ... data to create a Bid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bid we want to update
     *   }
     * })
     */
    upsert<T extends BidUpsertArgs>(args: SelectSubset<T, BidUpsertArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidCountArgs} args - Arguments to filter Bids to count.
     * @example
     * // Count the number of Bids
     * const count = await prisma.bid.count({
     *   where: {
     *     // ... the filter for the Bids we want to count
     *   }
     * })
    **/
    count<T extends BidCountArgs>(
      args?: Subset<T, BidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BidAggregateArgs>(args: Subset<T, BidAggregateArgs>): Prisma.PrismaPromise<GetBidAggregateType<T>>

    /**
     * Group by Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidGroupByArgs} args - Group by arguments.
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
      T extends BidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BidGroupByArgs['orderBy'] }
        : { orderBy?: BidGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bid model
   */
  readonly fields: BidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produk<T extends ProdukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdukDefaultArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bid model
   */
  interface BidFieldRefs {
    readonly id: FieldRef<"Bid", 'String'>
    readonly userId: FieldRef<"Bid", 'String'>
    readonly produkId: FieldRef<"Bid", 'String'>
    readonly bidAmount: FieldRef<"Bid", 'Int'>
    readonly status: FieldRef<"Bid", 'String'>
    readonly createdAt: FieldRef<"Bid", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bid findUnique
   */
  export type BidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findUniqueOrThrow
   */
  export type BidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findFirst
   */
  export type BidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findFirstOrThrow
   */
  export type BidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findMany
   */
  export type BidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bids to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid create
   */
  export type BidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to create a Bid.
     */
    data: XOR<BidCreateInput, BidUncheckedCreateInput>
  }

  /**
   * Bid createMany
   */
  export type BidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bid createManyAndReturn
   */
  export type BidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid update
   */
  export type BidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to update a Bid.
     */
    data: XOR<BidUpdateInput, BidUncheckedUpdateInput>
    /**
     * Choose, which Bid to update.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid updateMany
   */
  export type BidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to update.
     */
    limit?: number
  }

  /**
   * Bid updateManyAndReturn
   */
  export type BidUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid upsert
   */
  export type BidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The filter to search for the Bid to update in case it exists.
     */
    where: BidWhereUniqueInput
    /**
     * In case the Bid found by the `where` argument doesn't exist, create a new Bid with this data.
     */
    create: XOR<BidCreateInput, BidUncheckedCreateInput>
    /**
     * In case the Bid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BidUpdateInput, BidUncheckedUpdateInput>
  }

  /**
   * Bid delete
   */
  export type BidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter which Bid to delete.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid deleteMany
   */
  export type BidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bids to delete
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to delete.
     */
    limit?: number
  }

  /**
   * Bid without action
   */
  export type BidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
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


  export const WatchlistScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    produkId: 'produkId',
    createdAt: 'createdAt'
  };

  export type WatchlistScalarFieldEnum = (typeof WatchlistScalarFieldEnum)[keyof typeof WatchlistScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    key: 'key',
    value: 'value'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProdukScalarFieldEnum: {
    id: 'id',
    nama_barang: 'nama_barang',
    tanggal: 'tanggal',
    harga_awal: 'harga_awal',
    deskripsi: 'deskripsi',
    image_url: 'image_url',
    merk_mobil: 'merk_mobil',
    tipe_mobil: 'tipe_mobil',
    transmisi: 'transmisi',
    jumlah_seat: 'jumlah_seat',
    tahun: 'tahun',
    kilometer: 'kilometer',
    kategori: 'kategori',
    createdAt: 'createdAt'
  };

  export type ProdukScalarFieldEnum = (typeof ProdukScalarFieldEnum)[keyof typeof ProdukScalarFieldEnum]


  export const BidScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    produkId: 'produkId',
    bidAmount: 'bidAmount',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type BidScalarFieldEnum = (typeof BidScalarFieldEnum)[keyof typeof BidScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Kategori'
   */
  export type EnumKategoriFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Kategori'>
    


  /**
   * Reference to a field of type 'Kategori[]'
   */
  export type ListEnumKategoriFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Kategori[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type WatchlistWhereInput = {
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    id?: StringFilter<"Watchlist"> | string
    userId?: StringFilter<"Watchlist"> | string
    produkId?: StringFilter<"Watchlist"> | string
    createdAt?: DateTimeFilter<"Watchlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
  }

  export type WatchlistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    produkId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    produk?: ProdukOrderByWithRelationInput
  }

  export type WatchlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    userId?: StringFilter<"Watchlist"> | string
    produkId?: StringFilter<"Watchlist"> | string
    createdAt?: DateTimeFilter<"Watchlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
  }, "id">

  export type WatchlistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    produkId?: SortOrder
    createdAt?: SortOrder
    _count?: WatchlistCountOrderByAggregateInput
    _max?: WatchlistMaxOrderByAggregateInput
    _min?: WatchlistMinOrderByAggregateInput
  }

  export type WatchlistScalarWhereWithAggregatesInput = {
    AND?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    OR?: WatchlistScalarWhereWithAggregatesInput[]
    NOT?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Watchlist"> | string
    userId?: StringWithAggregatesFilter<"Watchlist"> | string
    produkId?: StringWithAggregatesFilter<"Watchlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Watchlist"> | Date | string
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
  }

  export type SettingOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    value?: StringFilter<"Setting"> | string
  }, "key">

  export type SettingOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"Setting"> | string
    value?: StringWithAggregatesFilter<"Setting"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    bids?: BidListRelationFilter
    watchlists?: WatchlistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    bids?: BidOrderByRelationAggregateInput
    watchlists?: WatchlistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    bids?: BidListRelationFilter
    watchlists?: WatchlistListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProdukWhereInput = {
    AND?: ProdukWhereInput | ProdukWhereInput[]
    OR?: ProdukWhereInput[]
    NOT?: ProdukWhereInput | ProdukWhereInput[]
    id?: StringFilter<"Produk"> | string
    nama_barang?: StringFilter<"Produk"> | string
    tanggal?: DateTimeFilter<"Produk"> | Date | string
    harga_awal?: IntFilter<"Produk"> | number
    deskripsi?: StringFilter<"Produk"> | string
    image_url?: StringNullableFilter<"Produk"> | string | null
    merk_mobil?: StringNullableFilter<"Produk"> | string | null
    tipe_mobil?: StringNullableFilter<"Produk"> | string | null
    transmisi?: StringNullableFilter<"Produk"> | string | null
    jumlah_seat?: IntNullableFilter<"Produk"> | number | null
    tahun?: IntNullableFilter<"Produk"> | number | null
    kilometer?: IntNullableFilter<"Produk"> | number | null
    kategori?: EnumKategoriFilter<"Produk"> | $Enums.Kategori
    createdAt?: DateTimeFilter<"Produk"> | Date | string
    bids?: BidListRelationFilter
    watchlists?: WatchlistListRelationFilter
  }

  export type ProdukOrderByWithRelationInput = {
    id?: SortOrder
    nama_barang?: SortOrder
    tanggal?: SortOrder
    harga_awal?: SortOrder
    deskripsi?: SortOrder
    image_url?: SortOrderInput | SortOrder
    merk_mobil?: SortOrderInput | SortOrder
    tipe_mobil?: SortOrderInput | SortOrder
    transmisi?: SortOrderInput | SortOrder
    jumlah_seat?: SortOrderInput | SortOrder
    tahun?: SortOrderInput | SortOrder
    kilometer?: SortOrderInput | SortOrder
    kategori?: SortOrder
    createdAt?: SortOrder
    bids?: BidOrderByRelationAggregateInput
    watchlists?: WatchlistOrderByRelationAggregateInput
  }

  export type ProdukWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProdukWhereInput | ProdukWhereInput[]
    OR?: ProdukWhereInput[]
    NOT?: ProdukWhereInput | ProdukWhereInput[]
    nama_barang?: StringFilter<"Produk"> | string
    tanggal?: DateTimeFilter<"Produk"> | Date | string
    harga_awal?: IntFilter<"Produk"> | number
    deskripsi?: StringFilter<"Produk"> | string
    image_url?: StringNullableFilter<"Produk"> | string | null
    merk_mobil?: StringNullableFilter<"Produk"> | string | null
    tipe_mobil?: StringNullableFilter<"Produk"> | string | null
    transmisi?: StringNullableFilter<"Produk"> | string | null
    jumlah_seat?: IntNullableFilter<"Produk"> | number | null
    tahun?: IntNullableFilter<"Produk"> | number | null
    kilometer?: IntNullableFilter<"Produk"> | number | null
    kategori?: EnumKategoriFilter<"Produk"> | $Enums.Kategori
    createdAt?: DateTimeFilter<"Produk"> | Date | string
    bids?: BidListRelationFilter
    watchlists?: WatchlistListRelationFilter
  }, "id">

  export type ProdukOrderByWithAggregationInput = {
    id?: SortOrder
    nama_barang?: SortOrder
    tanggal?: SortOrder
    harga_awal?: SortOrder
    deskripsi?: SortOrder
    image_url?: SortOrderInput | SortOrder
    merk_mobil?: SortOrderInput | SortOrder
    tipe_mobil?: SortOrderInput | SortOrder
    transmisi?: SortOrderInput | SortOrder
    jumlah_seat?: SortOrderInput | SortOrder
    tahun?: SortOrderInput | SortOrder
    kilometer?: SortOrderInput | SortOrder
    kategori?: SortOrder
    createdAt?: SortOrder
    _count?: ProdukCountOrderByAggregateInput
    _avg?: ProdukAvgOrderByAggregateInput
    _max?: ProdukMaxOrderByAggregateInput
    _min?: ProdukMinOrderByAggregateInput
    _sum?: ProdukSumOrderByAggregateInput
  }

  export type ProdukScalarWhereWithAggregatesInput = {
    AND?: ProdukScalarWhereWithAggregatesInput | ProdukScalarWhereWithAggregatesInput[]
    OR?: ProdukScalarWhereWithAggregatesInput[]
    NOT?: ProdukScalarWhereWithAggregatesInput | ProdukScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Produk"> | string
    nama_barang?: StringWithAggregatesFilter<"Produk"> | string
    tanggal?: DateTimeWithAggregatesFilter<"Produk"> | Date | string
    harga_awal?: IntWithAggregatesFilter<"Produk"> | number
    deskripsi?: StringWithAggregatesFilter<"Produk"> | string
    image_url?: StringNullableWithAggregatesFilter<"Produk"> | string | null
    merk_mobil?: StringNullableWithAggregatesFilter<"Produk"> | string | null
    tipe_mobil?: StringNullableWithAggregatesFilter<"Produk"> | string | null
    transmisi?: StringNullableWithAggregatesFilter<"Produk"> | string | null
    jumlah_seat?: IntNullableWithAggregatesFilter<"Produk"> | number | null
    tahun?: IntNullableWithAggregatesFilter<"Produk"> | number | null
    kilometer?: IntNullableWithAggregatesFilter<"Produk"> | number | null
    kategori?: EnumKategoriWithAggregatesFilter<"Produk"> | $Enums.Kategori
    createdAt?: DateTimeWithAggregatesFilter<"Produk"> | Date | string
  }

  export type BidWhereInput = {
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    id?: StringFilter<"Bid"> | string
    userId?: StringFilter<"Bid"> | string
    produkId?: StringFilter<"Bid"> | string
    bidAmount?: IntFilter<"Bid"> | number
    status?: StringFilter<"Bid"> | string
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
  }

  export type BidOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    produkId?: SortOrder
    bidAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    produk?: ProdukOrderByWithRelationInput
  }

  export type BidWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    userId?: StringFilter<"Bid"> | string
    produkId?: StringFilter<"Bid"> | string
    bidAmount?: IntFilter<"Bid"> | number
    status?: StringFilter<"Bid"> | string
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
  }, "id">

  export type BidOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    produkId?: SortOrder
    bidAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: BidCountOrderByAggregateInput
    _avg?: BidAvgOrderByAggregateInput
    _max?: BidMaxOrderByAggregateInput
    _min?: BidMinOrderByAggregateInput
    _sum?: BidSumOrderByAggregateInput
  }

  export type BidScalarWhereWithAggregatesInput = {
    AND?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    OR?: BidScalarWhereWithAggregatesInput[]
    NOT?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bid"> | string
    userId?: StringWithAggregatesFilter<"Bid"> | string
    produkId?: StringWithAggregatesFilter<"Bid"> | string
    bidAmount?: IntWithAggregatesFilter<"Bid"> | number
    status?: StringWithAggregatesFilter<"Bid"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bid"> | Date | string
  }

  export type WatchlistCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWatchlistsInput
    produk: ProdukCreateNestedOneWithoutWatchlistsInput
  }

  export type WatchlistUncheckedCreateInput = {
    id?: string
    userId: string
    produkId: string
    createdAt?: Date | string
  }

  export type WatchlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchlistsNestedInput
    produk?: ProdukUpdateOneRequiredWithoutWatchlistsNestedInput
  }

  export type WatchlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    produkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCreateManyInput = {
    id?: string
    userId: string
    produkId: string
    createdAt?: Date | string
  }

  export type WatchlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    produkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateInput = {
    key: string
    value: string
  }

  export type SettingUncheckedCreateInput = {
    key: string
    value: string
  }

  export type SettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingCreateManyInput = {
    key: string
    value: string
  }

  export type SettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    bids?: BidCreateNestedManyWithoutUserInput
    watchlists?: WatchlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutUserNestedInput
    watchlists?: WatchlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    watchlists?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdukCreateInput = {
    id?: string
    nama_barang: string
    tanggal: Date | string
    harga_awal: number
    deskripsi: string
    image_url?: string | null
    merk_mobil?: string | null
    tipe_mobil?: string | null
    transmisi?: string | null
    jumlah_seat?: number | null
    tahun?: number | null
    kilometer?: number | null
    kategori?: $Enums.Kategori
    createdAt?: Date | string
    bids?: BidCreateNestedManyWithoutProdukInput
    watchlists?: WatchlistCreateNestedManyWithoutProdukInput
  }

  export type ProdukUncheckedCreateInput = {
    id?: string
    nama_barang: string
    tanggal: Date | string
    harga_awal: number
    deskripsi: string
    image_url?: string | null
    merk_mobil?: string | null
    tipe_mobil?: string | null
    transmisi?: string | null
    jumlah_seat?: number | null
    tahun?: number | null
    kilometer?: number | null
    kategori?: $Enums.Kategori
    createdAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutProdukInput
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutProdukInput
  }

  export type ProdukUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    harga_awal?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    merk_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    tipe_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    transmisi?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_seat?: NullableIntFieldUpdateOperationsInput | number | null
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kilometer?: NullableIntFieldUpdateOperationsInput | number | null
    kategori?: EnumKategoriFieldUpdateOperationsInput | $Enums.Kategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutProdukNestedInput
    watchlists?: WatchlistUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    harga_awal?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    merk_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    tipe_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    transmisi?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_seat?: NullableIntFieldUpdateOperationsInput | number | null
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kilometer?: NullableIntFieldUpdateOperationsInput | number | null
    kategori?: EnumKategoriFieldUpdateOperationsInput | $Enums.Kategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutProdukNestedInput
    watchlists?: WatchlistUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type ProdukCreateManyInput = {
    id?: string
    nama_barang: string
    tanggal: Date | string
    harga_awal: number
    deskripsi: string
    image_url?: string | null
    merk_mobil?: string | null
    tipe_mobil?: string | null
    transmisi?: string | null
    jumlah_seat?: number | null
    tahun?: number | null
    kilometer?: number | null
    kategori?: $Enums.Kategori
    createdAt?: Date | string
  }

  export type ProdukUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    harga_awal?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    merk_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    tipe_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    transmisi?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_seat?: NullableIntFieldUpdateOperationsInput | number | null
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kilometer?: NullableIntFieldUpdateOperationsInput | number | null
    kategori?: EnumKategoriFieldUpdateOperationsInput | $Enums.Kategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdukUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    harga_awal?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    merk_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    tipe_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    transmisi?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_seat?: NullableIntFieldUpdateOperationsInput | number | null
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kilometer?: NullableIntFieldUpdateOperationsInput | number | null
    kategori?: EnumKategoriFieldUpdateOperationsInput | $Enums.Kategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateInput = {
    id?: string
    bidAmount: number
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBidsInput
    produk: ProdukCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateInput = {
    id?: string
    userId: string
    produkId: string
    bidAmount: number
    status?: string
    createdAt?: Date | string
  }

  export type BidUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBidsNestedInput
    produk?: ProdukUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    produkId?: StringFieldUpdateOperationsInput | string
    bidAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateManyInput = {
    id?: string
    userId: string
    produkId: string
    bidAmount: number
    status?: string
    createdAt?: Date | string
  }

  export type BidUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    produkId?: StringFieldUpdateOperationsInput | string
    bidAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProdukScalarRelationFilter = {
    is?: ProdukWhereInput
    isNot?: ProdukWhereInput
  }

  export type WatchlistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produkId?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchlistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produkId?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchlistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produkId?: SortOrder
    createdAt?: SortOrder
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

  export type SettingCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type BidListRelationFilter = {
    every?: BidWhereInput
    some?: BidWhereInput
    none?: BidWhereInput
  }

  export type WatchlistListRelationFilter = {
    every?: WatchlistWhereInput
    some?: WatchlistWhereInput
    none?: WatchlistWhereInput
  }

  export type BidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumKategoriFilter<$PrismaModel = never> = {
    equals?: $Enums.Kategori | EnumKategoriFieldRefInput<$PrismaModel>
    in?: $Enums.Kategori[] | ListEnumKategoriFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kategori[] | ListEnumKategoriFieldRefInput<$PrismaModel>
    not?: NestedEnumKategoriFilter<$PrismaModel> | $Enums.Kategori
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProdukCountOrderByAggregateInput = {
    id?: SortOrder
    nama_barang?: SortOrder
    tanggal?: SortOrder
    harga_awal?: SortOrder
    deskripsi?: SortOrder
    image_url?: SortOrder
    merk_mobil?: SortOrder
    tipe_mobil?: SortOrder
    transmisi?: SortOrder
    jumlah_seat?: SortOrder
    tahun?: SortOrder
    kilometer?: SortOrder
    kategori?: SortOrder
    createdAt?: SortOrder
  }

  export type ProdukAvgOrderByAggregateInput = {
    harga_awal?: SortOrder
    jumlah_seat?: SortOrder
    tahun?: SortOrder
    kilometer?: SortOrder
  }

  export type ProdukMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_barang?: SortOrder
    tanggal?: SortOrder
    harga_awal?: SortOrder
    deskripsi?: SortOrder
    image_url?: SortOrder
    merk_mobil?: SortOrder
    tipe_mobil?: SortOrder
    transmisi?: SortOrder
    jumlah_seat?: SortOrder
    tahun?: SortOrder
    kilometer?: SortOrder
    kategori?: SortOrder
    createdAt?: SortOrder
  }

  export type ProdukMinOrderByAggregateInput = {
    id?: SortOrder
    nama_barang?: SortOrder
    tanggal?: SortOrder
    harga_awal?: SortOrder
    deskripsi?: SortOrder
    image_url?: SortOrder
    merk_mobil?: SortOrder
    tipe_mobil?: SortOrder
    transmisi?: SortOrder
    jumlah_seat?: SortOrder
    tahun?: SortOrder
    kilometer?: SortOrder
    kategori?: SortOrder
    createdAt?: SortOrder
  }

  export type ProdukSumOrderByAggregateInput = {
    harga_awal?: SortOrder
    jumlah_seat?: SortOrder
    tahun?: SortOrder
    kilometer?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumKategoriWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kategori | EnumKategoriFieldRefInput<$PrismaModel>
    in?: $Enums.Kategori[] | ListEnumKategoriFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kategori[] | ListEnumKategoriFieldRefInput<$PrismaModel>
    not?: NestedEnumKategoriWithAggregatesFilter<$PrismaModel> | $Enums.Kategori
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKategoriFilter<$PrismaModel>
    _max?: NestedEnumKategoriFilter<$PrismaModel>
  }

  export type BidCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produkId?: SortOrder
    bidAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BidAvgOrderByAggregateInput = {
    bidAmount?: SortOrder
  }

  export type BidMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produkId?: SortOrder
    bidAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BidMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produkId?: SortOrder
    bidAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BidSumOrderByAggregateInput = {
    bidAmount?: SortOrder
  }

  export type UserCreateNestedOneWithoutWatchlistsInput = {
    create?: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistsInput
    connect?: UserWhereUniqueInput
  }

  export type ProdukCreateNestedOneWithoutWatchlistsInput = {
    create?: XOR<ProdukCreateWithoutWatchlistsInput, ProdukUncheckedCreateWithoutWatchlistsInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutWatchlistsInput
    connect?: ProdukWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutWatchlistsNestedInput = {
    create?: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistsInput
    upsert?: UserUpsertWithoutWatchlistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchlistsInput, UserUpdateWithoutWatchlistsInput>, UserUncheckedUpdateWithoutWatchlistsInput>
  }

  export type ProdukUpdateOneRequiredWithoutWatchlistsNestedInput = {
    create?: XOR<ProdukCreateWithoutWatchlistsInput, ProdukUncheckedCreateWithoutWatchlistsInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutWatchlistsInput
    upsert?: ProdukUpsertWithoutWatchlistsInput
    connect?: ProdukWhereUniqueInput
    update?: XOR<XOR<ProdukUpdateToOneWithWhereWithoutWatchlistsInput, ProdukUpdateWithoutWatchlistsInput>, ProdukUncheckedUpdateWithoutWatchlistsInput>
  }

  export type BidCreateNestedManyWithoutUserInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type WatchlistCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type WatchlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type BidUpdateManyWithoutUserNestedInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutUserInput | BidUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutUserInput | BidUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BidUpdateManyWithWhereWithoutUserInput | BidUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type WatchlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutUserInput | BidUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutUserInput | BidUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BidUpdateManyWithWhereWithoutUserInput | BidUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type WatchlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type BidCreateNestedManyWithoutProdukInput = {
    create?: XOR<BidCreateWithoutProdukInput, BidUncheckedCreateWithoutProdukInput> | BidCreateWithoutProdukInput[] | BidUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: BidCreateOrConnectWithoutProdukInput | BidCreateOrConnectWithoutProdukInput[]
    createMany?: BidCreateManyProdukInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type WatchlistCreateNestedManyWithoutProdukInput = {
    create?: XOR<WatchlistCreateWithoutProdukInput, WatchlistUncheckedCreateWithoutProdukInput> | WatchlistCreateWithoutProdukInput[] | WatchlistUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutProdukInput | WatchlistCreateOrConnectWithoutProdukInput[]
    createMany?: WatchlistCreateManyProdukInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<BidCreateWithoutProdukInput, BidUncheckedCreateWithoutProdukInput> | BidCreateWithoutProdukInput[] | BidUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: BidCreateOrConnectWithoutProdukInput | BidCreateOrConnectWithoutProdukInput[]
    createMany?: BidCreateManyProdukInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type WatchlistUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<WatchlistCreateWithoutProdukInput, WatchlistUncheckedCreateWithoutProdukInput> | WatchlistCreateWithoutProdukInput[] | WatchlistUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutProdukInput | WatchlistCreateOrConnectWithoutProdukInput[]
    createMany?: WatchlistCreateManyProdukInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumKategoriFieldUpdateOperationsInput = {
    set?: $Enums.Kategori
  }

  export type BidUpdateManyWithoutProdukNestedInput = {
    create?: XOR<BidCreateWithoutProdukInput, BidUncheckedCreateWithoutProdukInput> | BidCreateWithoutProdukInput[] | BidUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: BidCreateOrConnectWithoutProdukInput | BidCreateOrConnectWithoutProdukInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutProdukInput | BidUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: BidCreateManyProdukInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutProdukInput | BidUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: BidUpdateManyWithWhereWithoutProdukInput | BidUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type WatchlistUpdateManyWithoutProdukNestedInput = {
    create?: XOR<WatchlistCreateWithoutProdukInput, WatchlistUncheckedCreateWithoutProdukInput> | WatchlistCreateWithoutProdukInput[] | WatchlistUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutProdukInput | WatchlistCreateOrConnectWithoutProdukInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutProdukInput | WatchlistUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: WatchlistCreateManyProdukInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutProdukInput | WatchlistUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutProdukInput | WatchlistUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<BidCreateWithoutProdukInput, BidUncheckedCreateWithoutProdukInput> | BidCreateWithoutProdukInput[] | BidUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: BidCreateOrConnectWithoutProdukInput | BidCreateOrConnectWithoutProdukInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutProdukInput | BidUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: BidCreateManyProdukInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutProdukInput | BidUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: BidUpdateManyWithWhereWithoutProdukInput | BidUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type WatchlistUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<WatchlistCreateWithoutProdukInput, WatchlistUncheckedCreateWithoutProdukInput> | WatchlistCreateWithoutProdukInput[] | WatchlistUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutProdukInput | WatchlistCreateOrConnectWithoutProdukInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutProdukInput | WatchlistUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: WatchlistCreateManyProdukInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutProdukInput | WatchlistUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutProdukInput | WatchlistUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBidsInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput
    connect?: UserWhereUniqueInput
  }

  export type ProdukCreateNestedOneWithoutBidsInput = {
    create?: XOR<ProdukCreateWithoutBidsInput, ProdukUncheckedCreateWithoutBidsInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutBidsInput
    connect?: ProdukWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput
    upsert?: UserUpsertWithoutBidsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBidsInput, UserUpdateWithoutBidsInput>, UserUncheckedUpdateWithoutBidsInput>
  }

  export type ProdukUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<ProdukCreateWithoutBidsInput, ProdukUncheckedCreateWithoutBidsInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutBidsInput
    upsert?: ProdukUpsertWithoutBidsInput
    connect?: ProdukWhereUniqueInput
    update?: XOR<XOR<ProdukUpdateToOneWithWhereWithoutBidsInput, ProdukUpdateWithoutBidsInput>, ProdukUncheckedUpdateWithoutBidsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumKategoriFilter<$PrismaModel = never> = {
    equals?: $Enums.Kategori | EnumKategoriFieldRefInput<$PrismaModel>
    in?: $Enums.Kategori[] | ListEnumKategoriFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kategori[] | ListEnumKategoriFieldRefInput<$PrismaModel>
    not?: NestedEnumKategoriFilter<$PrismaModel> | $Enums.Kategori
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumKategoriWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kategori | EnumKategoriFieldRefInput<$PrismaModel>
    in?: $Enums.Kategori[] | ListEnumKategoriFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kategori[] | ListEnumKategoriFieldRefInput<$PrismaModel>
    not?: NestedEnumKategoriWithAggregatesFilter<$PrismaModel> | $Enums.Kategori
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKategoriFilter<$PrismaModel>
    _max?: NestedEnumKategoriFilter<$PrismaModel>
  }

  export type UserCreateWithoutWatchlistsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    bids?: BidCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchlistsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchlistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
  }

  export type ProdukCreateWithoutWatchlistsInput = {
    id?: string
    nama_barang: string
    tanggal: Date | string
    harga_awal: number
    deskripsi: string
    image_url?: string | null
    merk_mobil?: string | null
    tipe_mobil?: string | null
    transmisi?: string | null
    jumlah_seat?: number | null
    tahun?: number | null
    kilometer?: number | null
    kategori?: $Enums.Kategori
    createdAt?: Date | string
    bids?: BidCreateNestedManyWithoutProdukInput
  }

  export type ProdukUncheckedCreateWithoutWatchlistsInput = {
    id?: string
    nama_barang: string
    tanggal: Date | string
    harga_awal: number
    deskripsi: string
    image_url?: string | null
    merk_mobil?: string | null
    tipe_mobil?: string | null
    transmisi?: string | null
    jumlah_seat?: number | null
    tahun?: number | null
    kilometer?: number | null
    kategori?: $Enums.Kategori
    createdAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutProdukInput
  }

  export type ProdukCreateOrConnectWithoutWatchlistsInput = {
    where: ProdukWhereUniqueInput
    create: XOR<ProdukCreateWithoutWatchlistsInput, ProdukUncheckedCreateWithoutWatchlistsInput>
  }

  export type UserUpsertWithoutWatchlistsInput = {
    update: XOR<UserUpdateWithoutWatchlistsInput, UserUncheckedUpdateWithoutWatchlistsInput>
    create: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchlistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchlistsInput, UserUncheckedUpdateWithoutWatchlistsInput>
  }

  export type UserUpdateWithoutWatchlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProdukUpsertWithoutWatchlistsInput = {
    update: XOR<ProdukUpdateWithoutWatchlistsInput, ProdukUncheckedUpdateWithoutWatchlistsInput>
    create: XOR<ProdukCreateWithoutWatchlistsInput, ProdukUncheckedCreateWithoutWatchlistsInput>
    where?: ProdukWhereInput
  }

  export type ProdukUpdateToOneWithWhereWithoutWatchlistsInput = {
    where?: ProdukWhereInput
    data: XOR<ProdukUpdateWithoutWatchlistsInput, ProdukUncheckedUpdateWithoutWatchlistsInput>
  }

  export type ProdukUpdateWithoutWatchlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    harga_awal?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    merk_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    tipe_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    transmisi?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_seat?: NullableIntFieldUpdateOperationsInput | number | null
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kilometer?: NullableIntFieldUpdateOperationsInput | number | null
    kategori?: EnumKategoriFieldUpdateOperationsInput | $Enums.Kategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateWithoutWatchlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    harga_awal?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    merk_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    tipe_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    transmisi?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_seat?: NullableIntFieldUpdateOperationsInput | number | null
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kilometer?: NullableIntFieldUpdateOperationsInput | number | null
    kategori?: EnumKategoriFieldUpdateOperationsInput | $Enums.Kategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type BidCreateWithoutUserInput = {
    id?: string
    bidAmount: number
    status?: string
    createdAt?: Date | string
    produk: ProdukCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateWithoutUserInput = {
    id?: string
    produkId: string
    bidAmount: number
    status?: string
    createdAt?: Date | string
  }

  export type BidCreateOrConnectWithoutUserInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput>
  }

  export type BidCreateManyUserInputEnvelope = {
    data: BidCreateManyUserInput | BidCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchlistCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    produk: ProdukCreateNestedOneWithoutWatchlistsInput
  }

  export type WatchlistUncheckedCreateWithoutUserInput = {
    id?: string
    produkId: string
    createdAt?: Date | string
  }

  export type WatchlistCreateOrConnectWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistCreateManyUserInputEnvelope = {
    data: WatchlistCreateManyUserInput | WatchlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BidUpsertWithWhereUniqueWithoutUserInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutUserInput, BidUncheckedUpdateWithoutUserInput>
    create: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput>
  }

  export type BidUpdateWithWhereUniqueWithoutUserInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutUserInput, BidUncheckedUpdateWithoutUserInput>
  }

  export type BidUpdateManyWithWhereWithoutUserInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutUserInput>
  }

  export type BidScalarWhereInput = {
    AND?: BidScalarWhereInput | BidScalarWhereInput[]
    OR?: BidScalarWhereInput[]
    NOT?: BidScalarWhereInput | BidScalarWhereInput[]
    id?: StringFilter<"Bid"> | string
    userId?: StringFilter<"Bid"> | string
    produkId?: StringFilter<"Bid"> | string
    bidAmount?: IntFilter<"Bid"> | number
    status?: StringFilter<"Bid"> | string
    createdAt?: DateTimeFilter<"Bid"> | Date | string
  }

  export type WatchlistUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    update: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    data: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
  }

  export type WatchlistUpdateManyWithWhereWithoutUserInput = {
    where: WatchlistScalarWhereInput
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchlistScalarWhereInput = {
    AND?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    OR?: WatchlistScalarWhereInput[]
    NOT?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    id?: StringFilter<"Watchlist"> | string
    userId?: StringFilter<"Watchlist"> | string
    produkId?: StringFilter<"Watchlist"> | string
    createdAt?: DateTimeFilter<"Watchlist"> | Date | string
  }

  export type BidCreateWithoutProdukInput = {
    id?: string
    bidAmount: number
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateWithoutProdukInput = {
    id?: string
    userId: string
    bidAmount: number
    status?: string
    createdAt?: Date | string
  }

  export type BidCreateOrConnectWithoutProdukInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutProdukInput, BidUncheckedCreateWithoutProdukInput>
  }

  export type BidCreateManyProdukInputEnvelope = {
    data: BidCreateManyProdukInput | BidCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type WatchlistCreateWithoutProdukInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWatchlistsInput
  }

  export type WatchlistUncheckedCreateWithoutProdukInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type WatchlistCreateOrConnectWithoutProdukInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutProdukInput, WatchlistUncheckedCreateWithoutProdukInput>
  }

  export type WatchlistCreateManyProdukInputEnvelope = {
    data: WatchlistCreateManyProdukInput | WatchlistCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type BidUpsertWithWhereUniqueWithoutProdukInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutProdukInput, BidUncheckedUpdateWithoutProdukInput>
    create: XOR<BidCreateWithoutProdukInput, BidUncheckedCreateWithoutProdukInput>
  }

  export type BidUpdateWithWhereUniqueWithoutProdukInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutProdukInput, BidUncheckedUpdateWithoutProdukInput>
  }

  export type BidUpdateManyWithWhereWithoutProdukInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutProdukInput>
  }

  export type WatchlistUpsertWithWhereUniqueWithoutProdukInput = {
    where: WatchlistWhereUniqueInput
    update: XOR<WatchlistUpdateWithoutProdukInput, WatchlistUncheckedUpdateWithoutProdukInput>
    create: XOR<WatchlistCreateWithoutProdukInput, WatchlistUncheckedCreateWithoutProdukInput>
  }

  export type WatchlistUpdateWithWhereUniqueWithoutProdukInput = {
    where: WatchlistWhereUniqueInput
    data: XOR<WatchlistUpdateWithoutProdukInput, WatchlistUncheckedUpdateWithoutProdukInput>
  }

  export type WatchlistUpdateManyWithWhereWithoutProdukInput = {
    where: WatchlistScalarWhereInput
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyWithoutProdukInput>
  }

  export type UserCreateWithoutBidsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    watchlists?: WatchlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBidsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBidsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
  }

  export type ProdukCreateWithoutBidsInput = {
    id?: string
    nama_barang: string
    tanggal: Date | string
    harga_awal: number
    deskripsi: string
    image_url?: string | null
    merk_mobil?: string | null
    tipe_mobil?: string | null
    transmisi?: string | null
    jumlah_seat?: number | null
    tahun?: number | null
    kilometer?: number | null
    kategori?: $Enums.Kategori
    createdAt?: Date | string
    watchlists?: WatchlistCreateNestedManyWithoutProdukInput
  }

  export type ProdukUncheckedCreateWithoutBidsInput = {
    id?: string
    nama_barang: string
    tanggal: Date | string
    harga_awal: number
    deskripsi: string
    image_url?: string | null
    merk_mobil?: string | null
    tipe_mobil?: string | null
    transmisi?: string | null
    jumlah_seat?: number | null
    tahun?: number | null
    kilometer?: number | null
    kategori?: $Enums.Kategori
    createdAt?: Date | string
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutProdukInput
  }

  export type ProdukCreateOrConnectWithoutBidsInput = {
    where: ProdukWhereUniqueInput
    create: XOR<ProdukCreateWithoutBidsInput, ProdukUncheckedCreateWithoutBidsInput>
  }

  export type UserUpsertWithoutBidsInput = {
    update: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBidsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>
  }

  export type UserUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProdukUpsertWithoutBidsInput = {
    update: XOR<ProdukUpdateWithoutBidsInput, ProdukUncheckedUpdateWithoutBidsInput>
    create: XOR<ProdukCreateWithoutBidsInput, ProdukUncheckedCreateWithoutBidsInput>
    where?: ProdukWhereInput
  }

  export type ProdukUpdateToOneWithWhereWithoutBidsInput = {
    where?: ProdukWhereInput
    data: XOR<ProdukUpdateWithoutBidsInput, ProdukUncheckedUpdateWithoutBidsInput>
  }

  export type ProdukUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    harga_awal?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    merk_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    tipe_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    transmisi?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_seat?: NullableIntFieldUpdateOperationsInput | number | null
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kilometer?: NullableIntFieldUpdateOperationsInput | number | null
    kategori?: EnumKategoriFieldUpdateOperationsInput | $Enums.Kategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama_barang?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    harga_awal?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    merk_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    tipe_mobil?: NullableStringFieldUpdateOperationsInput | string | null
    transmisi?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_seat?: NullableIntFieldUpdateOperationsInput | number | null
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kilometer?: NullableIntFieldUpdateOperationsInput | number | null
    kategori?: EnumKategoriFieldUpdateOperationsInput | $Enums.Kategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type BidCreateManyUserInput = {
    id?: string
    produkId: string
    bidAmount: number
    status?: string
    createdAt?: Date | string
  }

  export type WatchlistCreateManyUserInput = {
    id?: string
    produkId: string
    createdAt?: Date | string
  }

  export type BidUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produk?: ProdukUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    produkId?: StringFieldUpdateOperationsInput | string
    bidAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    produkId?: StringFieldUpdateOperationsInput | string
    bidAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produk?: ProdukUpdateOneRequiredWithoutWatchlistsNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    produkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    produkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateManyProdukInput = {
    id?: string
    userId: string
    bidAmount: number
    status?: string
    createdAt?: Date | string
  }

  export type WatchlistCreateManyProdukInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type BidUpdateWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bidAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bidAmount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUpdateWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchlistsNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateManyWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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