import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Currency = {
   __typename?: 'Currency',
  name: Scalars['String'],
  symbol: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  currencies: Array<Currency>,
  rates: Array<Rate>,
};


export type QueryRatesArgs = {
  base: Scalars['String']
};

export type Rate = {
   __typename?: 'Rate',
  symbol: Scalars['String'],
  rate: Scalars['Float'],
};


export type GetRatesQueryVariables = {
  base: Scalars['String']
};


export type GetRatesQuery = (
  { __typename?: 'Query' }
  & { rates: Array<(
    { __typename?: 'Rate' }
    & Pick<Rate, 'rate' | 'symbol'>
  )> }
);

export type GetCurrenciesQueryVariables = {};


export type GetCurrenciesQuery = (
  { __typename?: 'Query' }
  & { currencies: Array<(
    { __typename?: 'Currency' }
    & Pick<Currency, 'name' | 'symbol'>
  )> }
);


export const GetRatesDocument = gql`
    query GetRates($base: String!) {
  rates(base: $base) {
    rate
    symbol
  }
}
    `;
export type GetRatesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetRatesQuery, GetRatesQueryVariables>, 'query'> & ({ variables: GetRatesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetRatesComponent = (props: GetRatesComponentProps) => (
      <ApolloReactComponents.Query<GetRatesQuery, GetRatesQueryVariables> query={GetRatesDocument} {...props} />
    );
    
export type GetRatesProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetRatesQuery, GetRatesQueryVariables> | TChildProps;
export function withGetRates<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetRatesQuery,
  GetRatesQueryVariables,
  GetRatesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetRatesQuery, GetRatesQueryVariables, GetRatesProps<TChildProps>>(GetRatesDocument, {
      alias: 'getRates',
      ...operationOptions
    });
};

/**
 * __useGetRatesQuery__
 *
 * To run a query within a React component, call `useGetRatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRatesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRatesQuery({
 *   variables: {
 *      base: // value for 'base'
 *   },
 * });
 */
export function useGetRatesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRatesQuery, GetRatesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRatesQuery, GetRatesQueryVariables>(GetRatesDocument, baseOptions);
      }
export function useGetRatesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRatesQuery, GetRatesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRatesQuery, GetRatesQueryVariables>(GetRatesDocument, baseOptions);
        }
export type GetRatesQueryHookResult = ReturnType<typeof useGetRatesQuery>;
export type GetRatesLazyQueryHookResult = ReturnType<typeof useGetRatesLazyQuery>;
export type GetRatesQueryResult = ApolloReactCommon.QueryResult<GetRatesQuery, GetRatesQueryVariables>;
export const GetCurrenciesDocument = gql`
    query GetCurrencies {
  currencies {
    name
    symbol
  }
}
    `;
export type GetCurrenciesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCurrenciesQuery, GetCurrenciesQueryVariables>, 'query'>;

    export const GetCurrenciesComponent = (props: GetCurrenciesComponentProps) => (
      <ApolloReactComponents.Query<GetCurrenciesQuery, GetCurrenciesQueryVariables> query={GetCurrenciesDocument} {...props} />
    );
    
export type GetCurrenciesProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetCurrenciesQuery, GetCurrenciesQueryVariables> | TChildProps;
export function withGetCurrencies<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCurrenciesQuery,
  GetCurrenciesQueryVariables,
  GetCurrenciesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetCurrenciesQuery, GetCurrenciesQueryVariables, GetCurrenciesProps<TChildProps>>(GetCurrenciesDocument, {
      alias: 'getCurrencies',
      ...operationOptions
    });
};

/**
 * __useGetCurrenciesQuery__
 *
 * To run a query within a React component, call `useGetCurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrenciesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrenciesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCurrenciesQuery, GetCurrenciesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCurrenciesQuery, GetCurrenciesQueryVariables>(GetCurrenciesDocument, baseOptions);
      }
export function useGetCurrenciesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCurrenciesQuery, GetCurrenciesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCurrenciesQuery, GetCurrenciesQueryVariables>(GetCurrenciesDocument, baseOptions);
        }
export type GetCurrenciesQueryHookResult = ReturnType<typeof useGetCurrenciesQuery>;
export type GetCurrenciesLazyQueryHookResult = ReturnType<typeof useGetCurrenciesLazyQuery>;
export type GetCurrenciesQueryResult = ApolloReactCommon.QueryResult<GetCurrenciesQuery, GetCurrenciesQueryVariables>;