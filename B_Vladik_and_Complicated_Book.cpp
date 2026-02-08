#include <bits/stdc++.h>
using namespace std;

#define ll long long
#define ull unsigned long long
#define de cout <<
#define lay cin >>
#define nl endl
#define tv return;

#define vip(v, n)              \
    for (ll i = 0; i < n; i++) \
        lay v[i];
#define vop(v, n)              \
    for (ll i = 0; i < n; i++) \
        de v[i] << " ";

#define div(i, v, b) for (ll i = v; i * i <= b; i++)
#define lp(i, v, b) for (ll i = v; i < b; i++)
#define rlp(i, v, b) for (ll i = v; i >= b; i--)
#define twop(i, j, v, b) for (ll i = v, j = b; i <= j;)
#define twopl(i, v, b) for (ll i = v, j = b; i < n && j >= 0; i++, j--)

#define vll vector<ll>
#define vllp vector<pair<ll, ll>>
#define vvl vector<vector<ll>>
#define umap unordered_map
#define us unordered_set

#define sortv(v) sort(v.begin(), v.end())
#define sortg(v) sort(v.begin(), v.end(), greater<ll>())
#define minv(v) *min_element(v.begin(), v.end())
#define findv(v, t) find(v.begin(), v.end(), t)
#define maxv(v) *max_element(v.begin(), v.end())

#define SITARAM                  \
    ios::sync_with_stdio(false); \
    cin.tie(NULL);

bool prm(ll x)
{
    if (x <= 1)
        return false;

    for (ll i = 2; i * i <= x; i++)
    {
        if (x % i == 0)
            return false;
    }
    return true;
}

void solve()
{
    ll n, k;
    lay n >> k;
    vll v(n);
    vip(v, n);
    map<ll, ll> mp;
    lp(i, 0, n)
    {
        mp[v[i]] = i;
    }
    while (k--)
    {
        ll l, r, id;
        lay l >> r >> id;si
        if ((l + r) == (mp[v[id]]) * 2)
            de "Yes\n";
        else
            de "No\n";
    }
}

int main()
{
    SITARAM
    ll t = 1;
    // lay t;
    while (t--)
        solve();
}