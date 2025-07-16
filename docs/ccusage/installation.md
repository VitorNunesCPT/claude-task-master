
# Using npx
npx ccusage@latest

#Local Installation (Optional)
Since ccusage has such a small bundle size, installation is entirely optional:

npm install -g ccusage

Usage
# Basic usage
ccusage          # Show daily report (default)
ccusage daily    # Daily token usage and costs
ccusage monthly  # Monthly aggregated report
ccusage session  # Usage by conversation session
ccusage blocks   # 5-hour billing windows

# Live monitoring
ccusage blocks --live  # Real-time usage dashboard

# Filters and options
ccusage daily --since 20250525 --until 20250530
ccusage daily --json  # JSON output
ccusage daily --breakdown  # Per-model cost breakdown