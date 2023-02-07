+++
title = "Telemetry"
template = "privacy.html"
transparent = true
+++

Spyglass collects usage data (only metadata, never any search terms or results) to
measure feature usage, discover product issues, and to help guide what we prioritize.
Selling usage data will never be part of our business model, it is used solely to
improve the end-user experience.

We use **[Sentry](https://sentry.io)** for crash reporting and **[MixPanel](https://mixpanel.com)**
for telemetry.

## Exhaustive Telemetry Table

| Event Name             | Description |
|------------------------|---------------------------------------------|
| `authorize_connection` | OAuth connection started with an integration |
| `install_lens`         | Request to install a lens from our community index |
| `num_search_results`   | Number of search results after a search |
| `search`               | Search bar activated |
| `update_check`         | Sends the current version to check for an update |